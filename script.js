const gridSizeInput = document.querySelector("#grid-input");
const gridUpdateBtn = document.querySelector(".update");
const grid = document.querySelector(".grid-div");
let squareArray = []; // Used to access squares later (might change)

function randomRGBValues() {
  let color1 = (Math.random() * 255).toFixed(0);
  let color2 = (Math.random() * 255).toFixed(0);
  let color3 = (Math.random() * 255).toFixed(0);
  
  return `${color1}, ${color2}, ${color3}`
}

function initialiseGridElements(num) {
  grid.replaceChildren();
  squareArray = [];
  size = 960 / num;
  num = num * num;


  for (let i = 0; i < num; i++) {
    const square = document.createElement("div");
    square.className = "square";
    square.style.height = `${size}`;
    square.style.width = `${size}`;
    let brightness = 100;
    squareArray[i] = square;
    grid.appendChild(square);
    
    square.addEventListener("mouseover", () => {
      if (brightness > 0) brightness -= 10;
      square.style.backgroundColor = `rgb(${randomRGBValues()})`;
      square.style.filter = `brightness(${brightness}%)`;
      ;
    })
  }
}


 function initialiseMenu() {
  gridSizeInput.addEventListener("input", () => {
    if (isNaN(gridSizeInput.value)) gridSizeInput.value = 0;
    if (parseInt(gridSizeInput.value) > 100) gridSizeInput.value = 100;
  })

  gridUpdateBtn.addEventListener("click", () => {
    initialiseGridElements(gridSizeInput.value);
  })
 }

// initialise all elements 16x16 = 256
initialiseMenu();
initialiseGridElements(16);