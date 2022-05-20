createGrid(16)

function createGrid(number) {
    deleteGrid()
    let container = document.querySelector('.container');

    for (let i = 0; i < Math.pow(number, 2); i++) {
        let square = document.createElement('div');
        square.classList.add('grid-square');
        container.appendChild(square);
    }
    changecolor()
    modifySquaresWidth(number)
}

getNumber()
function getNumber() {
    let button = document.querySelector(".btn-size")
    button.addEventListener("click", function question() {
        let size = Number(prompt("introduce the grid size (1 to 30)"))
        if (size <= 30) {
            return createGrid(size)
        } else if (size >= 31) {
            return question()
        }
        
    })
}

changecolor()
function changecolor() {
    let squares = document.querySelectorAll('.grid-square');
    squares.forEach(square => {
        square.addEventListener("mouseover", (e) => {
        //  e.target.classList.add("color")
            e.target.style.backgroundColor ="blue"
        })
    })
}

function getSquaresWidth(number) {
    let containerWidth = document.querySelector('.container').offsetWidth
    return containerWidth / number
}

function modifySquaresWidth(number) {
    
    let squares = document.querySelectorAll('.grid-square')
    squares.forEach(square => {
        square.style.minWidth = `${getSquaresWidth(number)}px`
    })
}

function deleteGrid(){
    let container = document.querySelector('.container');
    while (container.lastChild) {
        container.removeChild(container.lastChild)
    }
}
