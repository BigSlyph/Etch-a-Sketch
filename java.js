const grid = document.querySelector(".grid");
const resetButton = document.getElementById("btnReset");
const eraseButton = document.getElementById("btnErase");
const rainbowButton = document.getElementById("btnRainbow");
const limeButton = document.getElementById("btnLime");
const sizeButton = document.getElementById("btnSetSize");


function createGrid(rows, cols) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      grid.appendChild(cell).className = "square";
      
      cell.addEventListener('mouseover', e => e.target.classList.add('my-color-class'))
      
      resetButton.addEventListener('click', () => {
        console.log ('reset button click');
        cell.classList.remove('my-color-class')
      });

      limeButton.addEventListener('click', () => {
        console.log('lime button click');
       
        
      });
      
      eraseButton.addEventListener('click', () => {
        console.log('eraser button click')
      });

    };

   
  };

createGrid(7, 7)

sizeButton.addEventListener('click', () => {
console.log ('set size click')
let size = prompt("What size grid?")
if (size < 70){
  
  createGrid(size, size)
}
else {
  alert ("Must be below 70")
}
});





