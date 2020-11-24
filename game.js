const game = {
    cons: slotImgPxs = {
        orange: 0,
        seven: 80,
        bar: 160,
        apricot: 240,
        banana: 320,
        cherry: 400

    },
    init: function() {
        const slotButton = document.querySelector(".start-button")
        slotButton.addEventListener("click", this.setImage)

    },

    setImage: function() {
        let slots = document.querySelectorAll(".slot")
        let randomProperty = function (obj) {
            let keys = Object.keys(obj);
            return obj[keys[ keys.length * Math.random() << 0]];
        };
        let newPos0 = randomProperty(slotImgPxs)
        let newPos1 = randomProperty(slotImgPxs)
        let newPos2 = randomProperty(slotImgPxs)
        slots[0].style.backgroundPositionY = newPos0 + "px";
        slots[1].style.backgroundPositionY = newPos1 + "px";
        slots[2].style.backgroundPositionY = newPos2 + "px";

    },



    wheelInMotion: function() {
        let slots = document.querySelectorAll(".slot");
        let newPos = 0;
        setInterval(function (){
            newPos = newPos + 30;
            slots[0].style.backgroundPositionY = newPos + "px";
            slots[1].style.backgroundPositionY = newPos + "px";
            slots[2].style.backgroundPositionY = newPos + "px";
        }, 100);
    }

}



game.init();



        /*let anim = setInterval(setImage, 100, slots)
        setTimeout(function () {
            clearInterval(anim)
        }, 3000)
        function setImage(slots) {
                //slot.dataset.status = img[Math.floor(Math.random() * img.length)];
        }*/