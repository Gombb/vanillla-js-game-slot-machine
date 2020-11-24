window.onload = function() {
    const game = {
    init: function () {
        let slots = document.getElementsByClassName("slot");
        this.rollReel(slots[0]);
        this.rollReel(slots[1]);
        this.rollReel(slots[2]);

    },

    rollReel: function (slot) {
        let newPos = 0;
        setInterval(function (){
            newPos = newPos + 30;
            slot.style.backgroundPositionY = newPos + "px";
        }, 100);
    },

    };

    game.init();
}