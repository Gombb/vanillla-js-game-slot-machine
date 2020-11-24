window.onload = function() {
    const game = {
        init: function () {
            let slots = document.getElementsByClassName("slot");
            let slot0 = slots[0];
            let slot1 = slots[1];
            let slot2 = slots[2];
            let startButton = document.getElementById("button-start");
            let stopButton = document.getElementById("button-stop");
            var roller;

            stopButton.addEventListener("click", stopReels);
            startButton.addEventListener("click", startRolling);


            function startRolling() {
                slot0.classList.add("motion");
                roller = setInterval(rollReels, 100);
            }

            var newPos = 4;
            function rollReels() {
                newPos = newPos + 40;
                slot0.style.backgroundPositionY = newPos + "px";
            }

            function stopReels() {
                slot0.classList.remove("motion");
                clearInterval(roller);
            }
        },



    };

    game.init();
}