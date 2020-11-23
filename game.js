const game = {
    const: slotImg = ["apple", "cherry", "banana", "kiwi"],
    init: function() {
        const slotButton = document.querySelector(".start-button")
        slotButton.addEventListener("click", this.insertImg)

    },

    insertImg: function() {
        let img = slotImg;
        console.log(img)
        const randomElement = img[Math.floor(Math.random() * img.length)];
        let slots = document.querySelectorAll(".slot");
        for (let slot of slots){
            slot.dataset.status = img[Math.floor(Math.random() * img.length)];
        }
    }

}



game.init();
