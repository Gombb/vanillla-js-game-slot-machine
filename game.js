wallet = {
    username : "",
    userBalance: 0,
    increaseBalance: function (amount) {
        let balance = document.getElementById("user-balance");
        let balanceValue = parseInt(balance.value);
        balance.value = balanceValue + amount;
        wallet.userBalance = balance.value
        console.log("balance increased by " + amount);
    },
    decreaseBalance: function (amount) {
        let balance = document.getElementById("user-balance")
        let balanceValue = parseInt(balance.value);
        balance.value = balanceValue - amount;
        wallet.userBalance = balance.value
        console.log("balance decreased by " + amount);
    },
    depositToBalance: function () {
        let amount = parseInt(window.prompt("Deposit funds:"));
        wallet.increaseBalance(amount)
    }
}


function init(){
    const slotButton = document.querySelector(".start-button");
    const depositButton = document.querySelector(".deposit");
    slotButton.addEventListener("click", this.initSpin);
    depositButton.addEventListener("click", wallet.depositToBalance)
    let balance = document.getElementById("user-balance");
    balance.value = wallet.userBalance
}



function initSpin () {
    const imgArr = ["javascript", "python", "c++", "java", "psql"];
    let slots = document.querySelectorAll(".slot");
    if (wallet.userBalance <= 0) {
        alert("GET MORE BET MORE")
    } else {
        wallet.decreaseBalance(5)
        mixSlots(slots)
    }



    function mixSlots(slots) {
        let anim = setInterval(setImage, 100, slots);
        setTimeout(function () {
            clearInterval(anim)
            winCondition()
        }, 3000)
        function setImage(slots) {
            for (let slot of slots) {
                slot.dataset.status = imgArr[Math.floor(Math.random() * imgArr.length)];
            }
        }
    }
}


function winCondition () {
    let slots = document.querySelectorAll(".slot")
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
        wallet.increaseBalance(1);
    }
    if (allEqual([status3, status4, status5])) {
        wallet.increaseBalance(1);
    }
    if (allEqual([status6, status7, status8])) {
        wallet.increaseBalance(1);
    }
    if (allEqual([status0, status3, status6])) {
        wallet.increaseBalance(1);
    }
    if (allEqual([status1, status4, status7])) {
        wallet.increaseBalance(1);
    }
    if (allEqual([status2, status5, status8])) {
        wallet.increaseBalance(1);
    }
    if (allEqual([status0, status4, status8])) {
        wallet.increaseBalance(1);
    }
    if (allEqual([status6, status4, status2])) {
        wallet.increaseBalance(1);
    }
    console.log("turn-end")
}


init()
