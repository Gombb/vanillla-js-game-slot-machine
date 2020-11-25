const game = {
    const: slotImg = ["apple", "cherry", "banana", "kiwi"],
    init: function() {
        const slotButton = document.querySelector(".start-button")
        slotButton.addEventListener("click", this.insertImg)


    },

    insertImg: function() {
        document.getElementById('balance').stepDown(10)
        let img = slotImg;
        let slots = document.querySelectorAll(".slot");
        let newPos = 0;
        setInterval(function (){
        newPos = newPos + 30;
            slots[0].style.backgroundPositionY = newPos + "px";
            slots[1].style.backgroundPositionY = newPos + "px";
            slots[2].style.backgroundPositionY = newPos + "px";
            slots[3].style.backgroundPositionY = newPos + "px";
            slots[4].style.backgroundPositionY = newPos + "px";
            slots[5].style.backgroundPositionY = newPos + "px";
            slots[6].style.backgroundPositionY = newPos + "px";
            slots[7].style.backgroundPositionY = newPos + "px";
            slots[8].style.backgroundPositionY = newPos + "px";
        }, 100);

    }
}


function depositHundred(){
        document.getElementById('balance').stepUp(100)
        }

function depositFifty(){
        document.getElementById('balance').stepUp(50)
        }


game.init();



        /*let anim = setInterval(setImage, 100, slots)
        setTimeout(function () {
            clearInterval(anim)
        }, 3000)
        function setImage(slots) {
                //slot.dataset.status = img[Math.floor(Math.random() * img.length)];
        }*/