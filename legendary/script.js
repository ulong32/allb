$("#need-display").click(function () {
    $(this).toggleClass("active");
    $("#need_table").toggleClass("active");
});

$("#reward-display").click(function () {
    $(this).toggleClass("active");
    $("#reward_table").toggleClass("active");
});

$("input").change(function () {
    inputChange();
});

$("select").change(function () {
    inputChange();
});

function inputChange() {
    document.getElementById("calc-btn").className = "before-change";
    document.getElementById("calc-btn").value = "未反映";
}

function printError() {
    document.getElementById("calc-btn").className = "error";
    document.getElementById("calc-btn").value = "エラー";
}

function reset() {
    document.getElementById("diffDays").innerText = "-";
    document.getElementById("numOfMonday").innerText = "-";
    document.getElementById("daily_times_1").innerText = "-";
    document.getElementById("daily_times_2").innerText = "-";
    document.getElementById("weekly_times_1").innerText = "-";
    document.getElementById("weekly_times_2").innerText = "-";
}

function calc() {

    reset();

    let input_true_flag = true; // 1つでも入力が不正な値の場合false
    let startDate_true_flag = true; // 開始日が不正の場合false
    let finishDate_true_flag = true; // 終了日が不正の場合false

    // 往復モード
    const oufuku = parseInt(document.getElementById("oufuku").value);

    // 日付を取得し数値に変換
    let y1 = parseInt(document.getElementById("year1").value);
    let m1 = parseInt(document.getElementById("month1").value);
    let d1 = parseInt(document.getElementById("date1").value);
    let y2 = parseInt(document.getElementById("year2").value);
    let m2 = parseInt(document.getElementById("month2").value);
    let d2 = parseInt(document.getElementById("date2").value);
    document.getElementById("year1").classList.remove("error");
    document.getElementById("month1").classList.remove("error");
    document.getElementById("date1").classList.remove("error");
    document.getElementById("year2").classList.remove("error");
    document.getElementById("month2").classList.remove("error");
    document.getElementById("date2").classList.remove("error");

    // 所持取得
    let have_reward = {};
    for (let i = 0; i < reward_index.length; i++) {
        document.getElementById(`input_have_${reward_index[i]}`).classList.remove("error");
        have_reward[reward_index[i]] = parseInt(document.getElementById(`input_have_${reward_index[i]}`).value);
        if (have_reward[reward_index[i]] < 0) {
            document.getElementById(`input_have_${reward_index[i]}`).classList.add("error");
            input_true_flag = false;
        }
    }

    // 目標の取得
    let goal_item = {};
    for (let j = 0; j < item_index.length; j++) {
        document.getElementById(`input_goal_${item_index[j]}`).classList.remove("error");
        goal_item[item_index[j]] = parseInt(document.getElementById(`input_goal_${item_index[j]}`).value);
        if (goal_item[item_index[j]] < 0) {
            document.getElementById(`input_goal_${item_index[j]}`).classList.add("error");
            input_true_flag = false;
        }
    }

    // 日付の整合性チェック
    const max_date = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (m1 < 1 || 12 < m1) {
        document.getElementById("month1").classList.add("error");
        startDate_true_flag = false;
        if (d1 < 1 || 31 < d1) {
            document.getElementById("date1").classList.add("error");
            startDate_true_flag = false;
        }
    } else {
        let max_date_copy = max_date.concat();
        if (y1 % 4 == 0) max_date_copy[1] = 29;
        if (d1 < 1 || max_date_copy[m1 - 1] < d1) {
            document.getElementById("date1").classList.add("error");
            startDate_true_flag = false;
        }
    }
    if (m2 < 1 || 12 < m2) {
        document.getElementById("month2").classList.add("error");
        finishDate_true_flag = false;
        if (d2 < 1 || 31 < d2) {
            document.getElementById("date2").classList.add("error");
            finishDate_true_flag = false;
        }
    } else {
        let max_date_copy = max_date.concat();
        if (y2 % 4 == 0) max_date_copy[1] = 29;
        if (d2 < 1 || max_date_copy[m2 - 1] < d2) {
            document.getElementById("date2").classList.add("error");
            finishDate_true_flag = false;
        }
    }

    // 開始日が終了日より過去になっていないか
    if (y1 > y2) {
        document.getElementById("year1").classList.add("error");
        document.getElementById("year2").classList.add("error");
        input_true_flag = false;
    } else if (y1 == y2 && m1 > m2) {
        document.getElementById("month1").classList.add("error");
        document.getElementById("month2").classList.add("error");
        input_true_flag = false;
    } else if (m1 == m2 && d1 > d2) {
        document.getElementById("date1").classList.add("error");
        document.getElementById("date2").classList.add("error");
        input_true_flag = false;
    }

    // 日付オブジェクト生成
    let startDate = new Date(y1, m1 - 1, d1);
    let finishDate = new Date(y2, m2 - 1, d2);
    let startDay = startDate.getDay();
    let finishDay = finishDate.getDay()

    // 曜日表示 入力が正しい場合のみ行う
    let weekdayName = "日月火水木金土";
    if (startDate_true_flag == true) {
        document.getElementById("day1").innerText = weekdayName[startDay];
    } else {
        document.getElementById("day1").innerText = "-";
        input_true_flag = false;
    }
    if (finishDate_true_flag == true) {
        document.getElementById("day2").innerText = weekdayName[finishDay];
    } else {
        document.getElementById("day2").innerText = "-";
        input_true_flag = false;
    }

    // 入力に不正な値があった場合ここで中断
    if (input_true_flag != true) {
        printError();
        return false;
    }

    // 期間計算(開始日・終了日ともに含む)
    let already_get = document.getElementById("already_get").checked;
    if (already_get == true) {
        startDate.setDate(startDate.getDate() + 1);
        startDay = startDate.getDay();
    }
    let diffMilliSec = finishDate - startDate;
    let diffDays = parseInt(diffMilliSec / 1000 / 60 / 60 / 24) + 1;
    document.getElementById("diffDays").innerText = diffDays;

    // 月曜の回数を求める
    // 開始日から前の火曜まで = 日5 月6 火0 水1 木2 金3 土4 -> 開始曜日+5を7で割った余り
    // ((開始曜日+5) % 7 + 期間) % 7
    let numOfMonday = Math.floor(((startDay + 5) % 7 + diffDays) / 7);
    document.getElementById("numOfMonday").innerText = numOfMonday;

    // 週ごとの日数求める
    // 開始～最初の日曜 = 日1 月7 火6 水5 木4 金3 土2 -> 8-開始曜日
    let dayArray = [];
    let firstWeek = (7 - startDay) % 7 + 1;
    if (firstWeek > diffDays) {
        dayArray.push(diffDays);
    } else {
        dayArray.push(firstWeek);
        let diffDaysCopy = diffDays - firstWeek;
        while (diffDaysCopy > 7) {
            dayArray.push(7);
            diffDaysCopy -= 7;
        }
        dayArray.push(diffDaysCopy);
    }
    //console.log(dayArray);

    // 週ごとの日数・月曜の回数を往復で分ける
    let kaisu = { daily: [[], []], dailyTotal: [0, 0], weekly: [[], []], weeklyTotal: [0, 0] };
    if (oufuku == 1) {
        for (let i = 0; i < dayArray.length; i++) {
            kaisu["daily"][i % 2].push(dayArray[i]);
            kaisu["daily"][(i + 1) % 2].push(0);
            kaisu["dailyTotal"][i % 2] += dayArray[i];
            if (i == 0 && dayArray[i] != 7) {
                kaisu["weekly"][(i + 1) % 2].push(0);
            } else {
                kaisu["weekly"][(i + 1) % 2].push(1);
                kaisu["weeklyTotal"][(i + 1) % 2]++;
            }
            kaisu["weekly"][i % 2].push(0);
        }
    } else {
        for (let i = 0; i < dayArray.length; i++) {
            kaisu["daily"][0].push(dayArray[i]);
            kaisu["daily"][1].push(0);
            if (i == 0 && dayArray[i] != 7) {
                kaisu["weekly"][0].push(0);
            } else {
                kaisu["weekly"][0].push(1);
            }
            kaisu["weekly"][1].push(0);
        }
        kaisu["dailyTotal"][0] = diffDays;
        kaisu["weeklyTotal"][0] = numOfMonday;
    }
    //console.log(kaisu)
    document.getElementById("daily_times_1").innerText = kaisu["dailyTotal"][0];
    document.getElementById("daily_times_2").innerText = kaisu["dailyTotal"][1];
    document.getElementById("weekly_times_1").innerText = kaisu["weeklyTotal"][0];
    document.getElementById("weekly_times_2").innerText = kaisu["weeklyTotal"][1];

    // 選択したグレード・ランキングの取得
    let grade = [];
    let ranking = [];
    grade.push(document.getElementById("grade1").value);
    grade.push(document.getElementById("grade2").value);
    ranking.push(document.getElementById("ranking1").value);
    ranking.push(document.getElementById("ranking2").value);

    // 総獲得報酬計算
    let get_reward = {};
    let after_reward = {};
    for (let i = 0; i < reward_index.length; i++) {
        get_reward[reward_index[i]] = 0;
        get_reward[reward_index[i]] += daily_reward[grade[0]][reward_index[i]] * kaisu["dailyTotal"][0];
        get_reward[reward_index[i]] += daily_reward[grade[1]][reward_index[i]] * kaisu["dailyTotal"][1];
        get_reward[reward_index[i]] += weekly_reward[grade[0]][ranking[0]][reward_index[i]] * kaisu["weeklyTotal"][0];
        get_reward[reward_index[i]] += weekly_reward[grade[1]][ranking[1]][reward_index[i]] * kaisu["weeklyTotal"][1];
        after_reward[reward_index[i]] = get_reward[reward_index[i]] + have_reward[reward_index[i]];
        document.getElementById(`get_${reward_index[i]}`).innerText = get_reward[reward_index[i]];
        document.getElementById(`have_${reward_index[i]}`).innerText = have_reward[reward_index[i]];
        document.getElementById(`after_${reward_index[i]}`).innerText = after_reward[reward_index[i]];
    }

    // 目標の書き込み
    for (let j = 0; j < item_index.length; j++) {
        document.getElementById(`goal_${item_index[j]}`).innerText = goal_item[item_index[j]];
    }

    // 目標報酬の計算
    let goal_reward = {};
    for (let i = 0; i < reward_index.length; i++) {
        goal_reward[reward_index[i]] = 0;
        for (let j = 0; j < item_index.length; j++) {
            let goal_item_reward = need[item_index[j]][reward_index[i]] * goal_item[item_index[j]];
            goal_reward[reward_index[i]] += goal_item_reward;
            document.getElementById(`goal_${reward_index[i]}_${item_index[j]}`).innerText = goal_item_reward;
        }
        document.getElementById(`goal_${reward_index[i]}`).innerText = goal_reward[reward_index[i]];
    }

    // 不足分のメダル交換
    let exchange_need = 0;
    let over_medal = 0;
    let lack_reward = {};
    for (let i = 0; i < reward_index.length; i++) {
        lack_reward[reward_index[i]] = goal_reward[reward_index[i]] - after_reward[reward_index[i]];
        if (lack_reward[reward_index[i]] < 0) {
            document.getElementById(`lack_${reward_index[i]}`).innerText = 0;
        } else {
            document.getElementById(`lack_${reward_index[i]}`).innerText = lack_reward[reward_index[i]];
        }
        if (reward_index[i] != "medal") {
            let exchange = 0;
            if (lack_reward[reward_index[i]] < 0) lack_reward[reward_index[i]] = 0;
            exchange = medal_ratio[reward_index[i]] * lack_reward[reward_index[i]];
            exchange_need += exchange;
            document.getElementById(`exchange_${reward_index[i]}`).innerText = exchange;
        } else {
            over_medal = lack_reward[reward_index[i]] * -1;
            if (lack_reward[reward_index[i]] < 0) {
                document.getElementById("over_medal").innerText = over_medal;
            } else {
                document.getElementById("over_medal").innerText = 0;
            }
        }
    }
    document.getElementById("exchange_need").innerText = exchange_need;

    let exchange_lack = goal_reward["medal"] + exchange_need - after_reward["medal"];
    if (exchange_lack > 0) {
        document.getElementById("exchange_lack").innerText = exchange_lack + " 不足";
        document.getElementById("exchange_lack").className = "minus";
    } else {
        document.getElementById("exchange_lack").innerText = exchange_lack * -1 + " 余り";
        document.getElementById("exchange_lack").className = "plus";
    }

    document.getElementById("calc-btn").className = "";
    document.getElementById("calc-btn").value = "反映済み";
}

// 初期値は当日
let today = new Date();
let todayYear = today.getFullYear();
let todayMonth = today.getMonth() + 1;
let todayDate = today.getDate();
document.getElementById("year1").value = todayYear;
document.getElementById("year2").value = todayYear;
document.getElementById("month1").value = todayMonth;
document.getElementById("month2").value = todayMonth;
document.getElementById("date1").value = todayDate;
document.getElementById("date2").value = todayDate;

for (let i = 0; i < reward_index.length; i++) {
    for (let j = 0; j < item_index.length; j++) {
        document.getElementById(`need_${reward_index[i]}_${item_index[j]}`).innerText = need[item_index[j]][reward_index[i]];
    }
}

for (let i = 0; i < reward_index.length; i++) {
    if (reward_index[i] != "medal") {
        document.getElementById(`ratio_${reward_index[i]}`).innerText = medal_ratio[reward_index[i]];
    }
}

let reward_table = document.getElementById("reward_table").firstElementChild;
for (let i = 0; i < reward_index.length; i++) {
    for (let j = 0; j < grade_index.length; j++) {
        reward_table.rows[6 * j + 1].insertAdjacentHTML("beforeend", `<td>${daily_reward[grade_index[j]][reward_index[i]]}</td>`);
        for (let k = 0; k < ranking_index.length; k++) {
            reward_table.rows[6 * j + k + 2].insertAdjacentHTML("beforeend", `<td>${weekly_reward[grade_index[j]][ranking_index[k]][reward_index[i]]}</td>`);
        }
    }
}
