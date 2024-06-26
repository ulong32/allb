function getGachaData(gachaSelection) {
    for (let i = 0; i < gachaTicketJson.length; i++) {
        if (gachaTicketJson[i]["index"] == gachaSelection) return gachaTicketJson[i];
    }
    return "";
}

function getWholeInfo() {
    let totalRatio = thisGacha["lineup"]["total-ratio"];
    let volume = 0;
    for (let i = 0; i < thisGacha["lineup"]["else"].length; i++) {
        volume += thisGacha["lineup"]["else"][i]["content"].length;
    }
    let individualRatio = totalRatio / volume;
    let individualRatioString = (Math.floor(individualRatio * 1000) / 1000).toFixed(3);

    return `排出メモリア ★5出現率${totalRatio}% 全${volume}種 各${individualRatioString}%`;
}

function addTopics(topicArray) {
    let topics = "";
    for (let i = 0; i < topicArray.length; i++) {
        topics += `<br>${topicArray[i]}<br>`;
    }
    return topics;
}

function addLineup() {
    let topics = addTopics(thisGacha["lineup"]["topic"]);
    document.getElementById("lineup").insertAdjacentHTML("beforeend", topics);
    for (let i = 0; i < thisGacha["lineup"]["else"].length; i++) {
        let caption = `<br><h3>${thisGacha["lineup"]["else"][i]["date"]} ${thisGacha["lineup"]["else"][i]["caption"]} :</h3>`;
        document.getElementById("lineup").insertAdjacentHTML("beforeend", caption);
        document.getElementById("lineup").appendChild(getMemoriaList(thisGacha["lineup"]["else"][i]["content"], 2));
    }
}

// データ取得
const gachaTicketJson = loadData("../../data/gacha-ticket_data.json");
const memoriaJson = loadData("../../data/memoria_data.json");
const costumeJson = loadData("../../data/costume_data.json");
const charaDataTemp = loadData("../../data/chara_data.json");
const charaJson = charaDataTemp[0];
const charaBelongJson = charaDataTemp[1];


// URLパラメータ取得
const url = new URL(window.location.href);
const params = url.searchParams;

// indexのパラメータ取得
const gachaSelection = params.get("index");

// 指定ガチャのデータを取得
const thisGacha = getGachaData(gachaSelection);

if (thisGacha == "") {  // 指定ガチャが見つからなかった

    // エラーの旨を示すタイトルと本文
    document.title = "error!";
    document.getElementById("title").textContent = "error!";
    document.getElementById("caption").textContent = "ガチャ情報が見つかりませんでした";

} else {  // 見つかった

    // ガチャ名取得とタイトル反映
    const gachaName = thisGacha["name"];
    document.title = gachaName;
    document.getElementById("title").textContent = gachaName;

    // 情報書き込み
    document.getElementById("caption").textContent = getWholeInfo();
    addLineup();
}
