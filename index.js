'use strict';

const highscoreNum = document.querySelector(".highScoreNum");
const timer = document.querySelector(".timerNum");
const scoreNum = document.querySelector(".scoreNum");
const pointsBtn = document.querySelector(".pointsBtn");
const startBtn = document.querySelector(".startBtn");
const retryBtn = document.querySelector(".retryBtn");
let timerSum = 15; 
let highscoreSum = 0; 
let scoreSum = 0; 

// 1.) Game start/ Timer Function 
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

// 2.) Points btn & Update persistent highscore
pointsBtn.addEventListener("click", () => {
    if (timerSum < 15 && timerSum > 0.1) {
        scoreSum++;
        scoreNum.innerText = scoreSum;
        if (scoreSum > highscoreSum) {
            highscoreSum = scoreSum; 
            highscoreNum.innerText = highscoreSum;
        }
    }
})


//3.) Try again btn
retryBtn.addEventListener("click", () => {
    timerSum = 15; 
    scoreSum = 0; 
    timer.innerHTML = timerSum;
    scoreNum.innerText = scoreSum;
})



// 3.) Highscore 
    // if (scoreSum > highscoreSum) {
    //     highscoreSum = scoreSum; 
    // }






// Points btn de-activate --
// function clickDisable () {
//     if (timerSum = 0) {
//         pointsBtn.disabled = true;
//     }
// }
