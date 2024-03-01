document.querySelector(".openbtn").addEventListener("click", function () {//ボタンがクリックされたら
    this.classList.toggle("active");//ボタン自身に activeクラスを付与し
    document.querySelector("#g-nav").classList.toggle("panelactive");//ナビゲーションにpanelactiveクラスを付与
});

document.querySelector("#g-nav a").addEventListener("click", function() {//ナビゲーションのリンクがクリックされたら
    document.querySelector(".openbtn").classList.remove("active");//ボタンの activeクラスを除去し
    document.querySelector("#g-nav").classList.remove("panelactive");//ナビゲーションのpanelactiveクラスも除去
});