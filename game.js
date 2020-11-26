
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
        let amount = parseInt(window.prompt("Deposit funds:"));
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


function init(){
    const slotButton = document.querySelector(".start-button");
    const depositButton = document.querySelector(".deposit");
    slotButton.addEventListener("click", this.initSpin);
    depositButton.addEventListener("click", wallet.depositToBalance)
    let balance = document.getElementById("user-balance");
    balance.value = wallet.userBalance
    let ageConfirm = prompt("are you older then 18?")
    if (ageConfirm === "yes") wallet.initAdultTheme()
}



function initSpin () {
    const imgArr = ["javascript", "python", "c++", "java", "psql"];
    let slots = document.querySelectorAll(".slot");
    let betSize = document.getElementById("bet-size").value;
    if (wallet.userBalance -betSize < 0) {
        alert("GET MORE BET MORE")
    } else {
        wallet.decreaseBalance(betSize)
        mixSlots(slots)
    }



    function mixSlots(slots) {
        let anim = setInterval(setImage, 175, slots);
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
    if (winningStreak >= 2) pot = pot *2
    if (pot > 0 ) {
        soundEffects.playEffect(soundEffects.coin)
    } else {
        soundEffects.playEffect(soundEffects.lose)
    }
    console.log("turn-end")
}


init()
