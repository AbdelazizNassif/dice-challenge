var firstPlayerNumber = Math.floor(Math.random() * (6) + 1);
var secondPlayerNumber = Math.floor(Math.random() * (6) + 1);

console.log(firstPlayerNumber);
console.log(secondPlayerNumber);

document.querySelector(".img1").setAttribute("src",
    `./images/dice${firstPlayerNumber}.png`
)
document.querySelector(".img2").setAttribute("src",
    `./images/dice${secondPlayerNumber}.png`
)

if (firstPlayerNumber > secondPlayerNumber) {
  document.querySelector("h1").innerText = ("☝️ Player 1 won!");
} else if (firstPlayerNumber < secondPlayerNumber) {
  document.querySelector("h1").innerText = ("Player 2 won! ☝️");
} else {
  document.querySelector("h1").innerText = ("Draw!");
}


