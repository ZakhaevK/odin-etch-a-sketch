const grid = document.querySelector(".grid-div");
let squareArray = []; // Used to access squares later (might change)

function initialiseGridElements(num) {
  for (let i = 0; i < num; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    squareArray[i] = square;
    grid.appendChild(square);
  }
 }

// initialise all elements 16x16 = 256
 initialiseGridElements(256);