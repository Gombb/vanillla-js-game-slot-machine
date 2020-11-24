initGame();

function initGame() {
    let slots = document.getElementsByClassName("slot");
    let newPos = 0;
    setInterval(function (){
        newPos = newPos + 30;
        slots[0].style.backgroundPositionY = newPos + "px";
        slots[1].style.backgroundPositionY = newPos + "px";
        slots[2].style.backgroundPositionY = newPos + "px";
    }, 100);



}

