// function createGrid(number) {
//     let container = document.querySelector('.container');


//     for (let i = 0; i < Math.pow(number, 2); i++) {
//         let square = document.createElement('div');
//         square.classList.add('grid-square');
//         container.appendChild(square);
//     }
// }

originalGrid()
function originalGrid() {
    let container = document.querySelector('.container');
    for (let i = 0; i < 256; i++) {
        let square = document.createElement('div');
        square.classList.add('grid-square');
        container.appendChild(square);
    }
}

changecolor()
function changecolor(){
    let squares = document.querySelectorAll('.grid-square');
    squares.forEach(square => {
        square.addEventListener("mouseover",(e)=>{
            e.target.classList.add("color")
        })
    })
}