const grid = document.querySelector(".grid-div");
let squareArray = []; // Used to access squares later (might change)

function randomRGBValues() {
  let color1 = (Math.random() * 255).toFixed(0);
  let color2 = (Math.random() * 255).toFixed(0);
  let color3 = (Math.random() * 255).toFixed(0);
  
  return `${color1}, ${color2}, ${color3}`
}

function initialiseGridElements(num) {
  num = num * num;
  for (let i = 0; i < num; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    squareArray[i] = square;
    grid.appendChild(square);
    
    square.addEventListener("mouseover", () => {
      square.setAttribute("style", `background-color:rgb(${randomRGBValues()})`);
    })
  }
 }

// initialise all elements 16x16 = 256
 initialiseGridElements(16);