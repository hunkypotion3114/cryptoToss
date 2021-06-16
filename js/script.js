function coinToss() {
    var coinTossOutcome = Math.floor(Math.random() * 2 + 1);
    if (coinTossOutcome === 1) {
        document.querySelector(".coin").setAttribute("src", "images/bitcoin.png");
        document.querySelector(".message").textContent = "Bitcoin Survives Another Day!!";
    } else {
        document.querySelector(".coin").setAttribute("src", "images/STOPELON.png");
        document.querySelector(".message").textContent = "Bitcoin has fallen, Stop Elon!!";
    }
}

function refreshIndicator(){
    document.querySelector(".refresh-icon").classList.toggle("refresh-icon-onclick");
}

