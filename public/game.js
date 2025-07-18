const cells = document.querySelectorAll(".cell");
let currentPlayer = "X";
const message = document.getElementById("message");

cells.forEach((cell) => {
cell.addEventListener("click", () => {
if (cell.textContent === "") {
cell.textContent = currentPlayer;
if (checkWin()) {
message.textContent = ${currentPlayer} wins!;
disableBoard();
} else if ([...cells].every((c) => c.textContent !== "")) {
message.textContent = "It's a draw!";
} else {
currentPlayer = currentPlayer === "X" ? "O" : "X";
}
}
});
});

function checkWin() {
const wins = [
[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],
[0,4,8],[2,4,6],
];
return wins.some((combo) => {
return combo.every((i) => cells[i].textContent === currentPlayer);
});
}

function disableBoard() {
cells.forEach(cell => cell.style.pointerEvents = "none");
}
