const highscoreNum = document.querySelector(".highScoreNum");
const timer = document.querySelector(".timerNum");
const scoreNum = document.querySelector(".scoreNum");
const pointsBtn = document.querySelector(".pointsBtn");
const startBtn = document.querySelector(".startBtn");
const retryBtn = document.querySelector(".retryBtn");
let timerSum = 5; 
let highscoreSum = 0; 
let scoreSum = 0; 

// 1.) Game start -- 
startBtn.addEventListener("click", () => {
    setInterval(gameStart, 1000)
})

function gameStart() {
    if (timerSum > 0) {
    timerSum--; 
    timer.innerHTML = timerSum; 
    startBtn.disabled = true
    }
}

// 2.) Points btn
pointsBtn.addEventListener("click", () => {
    if (timerSum < 5 && timerSum > 0.1) {
        scoreSum++;
        scoreNum.innerText = scoreSum;
    }
})


// 3.) Retry Button






// 4.) High score set --

// Points btn de-activate --
// function clickDisable () {
//     if (timerSum = 0) {
//         pointsBtn.disabled = true;
//     }
// }
