const game = {
    const: slotImg = ["psql", "java", "javascript", "python", "c++"],
    init: function() {
        const slotButton = document.querySelector(".start-button")
        slotButton.addEventListener("click", this.insertImg)

    },

    insertImg: function() {
        let img = slotImg;
        let slots = document.querySelectorAll(".slot");
        let anim = setInterval(setImage, 100, slots)
        setTimeout(function () {
            clearInterval(anim)
        }, 3000)
        function setImage(slots) {
            for (let slot of slots) {
                slot.dataset.status = img[Math.floor(Math.random() * img.length)];
            }
        }

    }
}



game.init();