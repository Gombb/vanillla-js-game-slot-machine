
wallet = {
    username: "",
    adult: false,
    userBalance: 0,
    increaseBalance: function (amount) {
        let balance = document.getElementById("user-balance");
        let balanceValue = parseInt(balance.value);
        balance.value = balanceValue + amount;
        wallet.userBalance = balance.value;
        console.log("balance increased by " + amount);
    },
    decreaseBalance: function (amount) {
        let balance = document.getElementById("user-balance")
        let balanceValue = parseInt(balance.value);
        balance.value = balanceValue - amount;
        wallet.userBalance = balance.value;
        console.log("balance decreased by " + amount);
    },
    depositToBalance: function () {
        let blinkText = document.querySelector(".blinking")
        let amount = parseInt(window.prompt("Deposit funds:"));
        blinkText.dataset.status = "hide";
        wallet.increaseBalance(amount);
    },
    initAdultTheme: function () {
        let slots = document.querySelectorAll(".slot");
        for(let slot of slots){
            slot.dataset.adult = "true";
        }
    }

}

soundEffects = {
    win:  [new Audio("sounds/win.mp3")],
    lose: [new Audio("sounds/lose.mp3")],
    spin: new Audio("sounds/spin.mp3"),
    coin: [new Audio("sounds/coin.mp3")],
    playEffect: function(effect){
        for (let i=0; i<effect.length; i++){
            setTimeout(effect[i].play(), 50)
        }
    }
}

statusText = {
    statusElement: document.querySelector(".status-text"),
    disappearingText: function(text){
        document.querySelector(".blinking").dataset.status = "hide"
        this.writeText(text)
        setTimeout(this.clearText, 1250, text)
    },
    clearText: function(){
        statusText.statusElement.innerHTML = ""
    },
    writeText: function(text){
        statusText.statusElement.innerHTML = text
    }
}

function init(){
    document.getElementById("user-balance").readOnly=true;
    const slotButton = document.querySelector(".start-button");
    const depositButton = document.querySelector(".deposit");
    slotButton.addEventListener("click", this.initSpin);
    depositButton.addEventListener("click", wallet.depositToBalance)
    let balance = document.getElementById("user-balance");
    balance.value = wallet.userBalance
    //let ageConfirm = prompt("are you older then 18?")
    //if (ageConfirm === "yes") wallet.initAdultTheme()
}

function initSpin () {
    const imgArr = ["javascript", "python", "c++", "java", "psql"];
    let slots = document.querySelectorAll(".slot");
    let betSize = document.getElementById("bet-size").value;
    if (wallet.userBalance -betSize < 0 || betSize === "0") {
        statusText.disappearingText("GET MORE BET MORE")
    } else {
        statusText.disappearingText("You bet " + betSize + "$")
        wallet.decreaseBalance(betSize)
        mixSlots(slots)
    }


    function mixSlots(slots) {
        let anim = setInterval(setImage, 125, slots);
        setTimeout(function () {
            clearInterval(anim)
            winCondition(betSize)
        }, 3000)
        function setImage(slots) {
            soundEffects.spin.play().then(r => soundEffects.spin.play())
            for (let slot of slots) {
                slot.dataset.status = imgArr[Math.floor(Math.random() * imgArr.length)];
            }
        }
    }
}


function winCondition (betSize) {
    let slots = document.querySelectorAll(".slot");
    const multiplier = 2;
    let winningStreak = 0;
    let pot = 0
    if (slots[0].dataset.status === "none") return
    const allEqual = arr => arr.every(v => v === arr[0])
    let status0 = slots[0].dataset.status;
    let status1 = slots[1].dataset.status;
    let status2 = slots[2].dataset.status;
    let status3 = slots[3].dataset.status;
    let status4 = slots[4].dataset.status;
    let status5 = slots[5].dataset.status;
    let status6 = slots[6].dataset.status;
    let status7 = slots[7].dataset.status;
    let status8 = slots[8].dataset.status;
    if (allEqual([status0, status1, status2])) {
        pot = pot + betSize * multiplier;
        winningStreak ++;
    }
    if (allEqual([status3, status4, status5])) {
        pot = pot + betSize * multiplier;
        winningStreak ++;
    }
    if (allEqual([status6, status7, status8])) {
        pot = pot + betSize * multiplier;
        winningStreak ++;
    }
    if (allEqual([status0, status3, status6])) {
        pot = pot + betSize * multiplier;
        winningStreak ++;
    }
    if (allEqual([status1, status4, status7])) {
        pot = pot + betSize * multiplier;
        winningStreak ++;
    }
    if (allEqual([status2, status5, status8])) {
        pot = pot + betSize * multiplier;
        winningStreak ++;
    }
    if (allEqual([status0, status4, status8])) {
        pot = pot + betSize * multiplier;
        winningStreak ++;
    }
    if (allEqual([status6, status4, status2])) {
        pot = pot + betSize * multiplier;
        winningStreak ++;
    }
    if (winningStreak >= 2) {
        pot = pot * 2
    }
    if (pot > 0 && winningStreak < 2) {
        statusText.disappearingText("You won "+ pot.toString() +"$")
        wallet.increaseBalance(pot)
        soundEffects.playEffect(soundEffects.coin)
    } else {
        statusText.disappearingText("You lost "+ betSize + "$")
        soundEffects.playEffect(soundEffects.lose)
    }
}


init()
