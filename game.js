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

            stopButton.addEventListener("click", stopSpin);
            startButton.addEventListener("click", startSpin);


            function startSpin () {
                slot0.classList.add("motion");
                roller = setInterval(spin, 30);
            }

            var newPos = 4;
            function spin () {
                if (newPos == 1374) {
                    newPos = 4;
                } else {
                    newPos = newPos + 10;
                }
                slot0.style.backgroundPositionY = newPos + "px";
            }

            function stopSpin () {
                slot0.style.backgroundPositionY = 4 + "px";
                slot0.classList.remove("motion");
                clearInterval(roller);
                var x = 4;
                roller = setInterval(function () {
                    if (newPos == 1374) {
                        newPos = 4;
                    } else {
                        newPos = newPos + 5;
                    }
                    slot0.style.backgroundPositionY = newPos + "px";
                    if (++x === 74) {
                        window.clearInterval(roller);
                    }
                }, 30)
                console.log(pixelToInt(slot0.style.backgroundPositionY));
            }

            function pixelToInt (valueToParse) {
                let extractedValue = valueToParse.replace("px", "");
                return extractedValue * 1;
            }
        },



    };

    game.init();
}