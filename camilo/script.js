// script.js
const draggablePieces = document.querySelectorAll(".draggable-piece");
const centralBranch = document.querySelector("model-viewer");

draggablePieces.forEach((piece) => {
  piece.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", event.target.textContent);
  });
});

centralBranch.addEventListener("dragover", (event) => {
  event.preventDefault();
});

centralBranch.addEventListener("drop", (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  const correctAnswer = centralBranch.getAttribute("data-answer");

  if (data === correctAnswer) {
    // Piece fits correctly
    centralBranch.style.backgroundColor = "#aaffaa";
  } else {
    // Piece doesn't fit
    console.log("Incorrect placement!");
  }
});
