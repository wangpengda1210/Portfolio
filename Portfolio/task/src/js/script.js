function getElementTop(element){
    let actualTop = element.offsetTop;
    let current = element.offsetParent;

    while (current !== null){
        actualTop += current.offsetTop;
        current = current.offsetParent;
    }

    return actualTop;
}

function show(id) {
    let grayBox = document.querySelector(".gray-box");
    let popUpWindow = document.getElementById(id);
    let portfolio = document.getElementById("portfolio-title");
    let scroll = document.getElementById("scroll");

    grayBox.style.display = "block";
    grayBox.style.height = document.body.clientHeight + "px";

    popUpWindow.style.display = "block";
    popUpWindow.style.top = getElementTop(portfolio) + "px";

    scroll.style.overflowY = "hidden";
}

function hide(id) {
    let grayBox = document.querySelector(".gray-box");
    let popUpWindow = document.getElementById(id);
    let scroll = document.getElementById("scroll");

    grayBox.style.display = "none";
    popUpWindow.style.display = "none";

    scroll.style.overflowY = "visible";
}

function hamburger() {
    let hamList = document.querySelector(".hamburger-list");
    let hamButton = document.getElementById("hamburger-button");

    if (hamList.style.opacity === "1") {
        hamList.style.opacity = "0";
        hamList.className = "hamburger-list hide-list"
        hamButton.style.backgroundImage = 'url("./imgs/menu.svg")';
        hamButton.className = "left-rotate";
    } else {
        hamList.style.opacity = "1";
        hamList.className = "hamburger-list show-list"
        hamButton.style.backgroundImage = 'url("./imgs/close.svg")';
        hamButton.className = "right-rotate";
    }
}