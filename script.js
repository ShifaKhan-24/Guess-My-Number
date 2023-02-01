"use strict";
// Reading the content of element meaasage
/*console.log(document.querySelector(".message").textContent);

//changing content of number element to 6
document.querySelector(".number").textContent = 6;

//changing content of score element to 10
document.querySelector(".score").textContent = 10;

//changing value of guess input element to 18
document.querySelector(".guess").value = 18;

console.log(document.querySelector(".guess").value);*/

// generating random secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

// Refactoring for displaying the content of the message
const dispMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //when no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number!";
  }

  //when player wins
  else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "🎉Correct Number !";
    dispMessage("🎉Correct Number");
    score++;
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".score").textContent = score;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "40rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  //if player dosn't win

  if (guess != secretNumber) {
    if (score > 1) {
      //   document.querySelector(".message").textContent =
      //     guess > secretNumber ? "📈 Too High..." : "📉 Too Low...";

      dispMessage(guess > secretNumber ? "📈 Too High..." : "📉 Too Low...");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //   document.querySelector(".message").textContent = " 💥 You Lost the Game ";
      dispMessage("💥 You Lost the Game");

      score = 0;
      document.querySelector(".score").textContent = score;
    }
  }

  // refactoring of this code is done  above 👆

  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "📈 Too High...";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = " 💥 You Lost the Game ";
  //       score = 0;
  //       document.querySelector(".score").textContent = score;
  //     }
  //   }
  //    else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "📉 Too Low...";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = " 💥 You Lost the Game ";
  //       score = 0;
  //       document.querySelector(".score").textContent = score;
  //     }
  //   }
});

document.querySelector(".again").addEventListener("click", function () {
  // initial score val=20
  score = 20;
  document.querySelector(".score").textContent = score;

  //new value of secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //initial value for message
  //   document.querySelector(".message").textContent = "Start Guessing... !";
  dispMessage("Start Guessing... !");

  // initial ? symbol
  document.querySelector(".number").textContent = "?";

  //clear input
  document.querySelector(".guess").value = " ";

  //initial background colour
  document.querySelector("body").style.backgroundColor = "#222";

  // initial width of number box
  document.querySelector(".number").style.width = "15rem";
});
