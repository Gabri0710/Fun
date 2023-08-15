const cells = document.querySelectorAll('.cell');
const resultText = document.getElementById("result");
const restartButton = document.getElementById("restart");
const videoPlayer = document.getElementById("videoPlayer1");

let currentPlayer = 'X';

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (!cell.textContent) {
      cell.textContent = currentPlayer;
      if (checkWinner(currentPlayer)) {
	resultText.textContent = "Hai vinto!";
	videoPlayer.style.display = "block";
	videoPlayer.play();
	window.scrollBy(0, 400);
        return;
      }
      currentPlayer = 'O';
      computerMove();
    }
  });
});


restartButton.addEventListener("click", () => {
	videoPlayer.pause();
 	videoPlayer.currentTime = 0;
	videoPlayer.style.display = "none";
	resetBoard();
	
	

});

function computerMove() {
  const emptyCells = [...cells].filter(cell => !cell.textContent);
  if (emptyCells.length > 0) {
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    emptyCells[randomIndex].textContent = currentPlayer;
    if (checkWinner(currentPlayer)) {
      resultText.textContent = "Hai perso!";
      return;
    }
    currentPlayer = 'X';
  }
}

function checkWinner(player) {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  return winningCombos.some(combo => {
    return combo.every(index => cells[index].textContent === player);
  });
}

function resetBoard() {
  cells.forEach(cell => {
    cell.textContent = '';
  });

  resultText.textContent = "";
}