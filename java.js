const container = document.querySelector(".container");
const eraser = document.getElementById("eraser");
const size = document.getElementById("setSize");
const pink = document.getElementById("pink");
const reset = document.getElementById("reset");



function createGrid(size){
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let i = 0 ; i < (size*size); i++) {
    let cell = document.createElement("div");
    cell.style.backgroundColor = "white";
    cell.style.border = "white solid 0.1px";
    container.appendChild(cell);

    cell.addEventListener('mouseover', e=> {
      cell.style.backgroundColor = "pink";
    })

    eraser.addEventListener('click', e=> {
      cell.addEventListener('mouseover', e=> {
        cell.style.backgroundColor = "white";
      })
    })
    pink.addEventListener('click', e=> {
      cell.addEventListener('mouseover', e=> {
        cell.style.backgroundColor = "pink";
      })
    })

    function resetGrid(){
      reset.addEventListener('click', e=>{
        cell.style.backgroundColor = "white";
        
      })
    }

    resetGrid()
  }
}

createGrid(16)



function setSize () {
  let x = prompt("What size grid? (Up to 100)")
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.innerHTML = '';
  if (x > 100){
    alert("Must be 100 or less")
  } 
  else {
    createGrid(x)
  }
}


size.addEventListener('click', e =>{
  setSize()
})
