createGrid(16)
changecolor()
toggleActive()
getNumber()
function createGrid(number) {
    if (number > 0) {
        deleteGrid()
        let container = document.querySelector('.container');

        for (let i = 0; i < Math.pow(number, 2); i++) {
            let square = document.createElement('div');
            square.classList.add('grid-square');
            container.appendChild(square);
        }
        changecolor()
        toggleActive()
        modifySquaresWidth(number)
    } else { return }
}


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

function changecolor() {
    let color = document.querySelector(".btn-color")
    let squares = document.querySelectorAll('.grid-square');
    squares.forEach(square => {
        square.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = color.value
        })
    })
}

function rainbowColor() {

    let squares = document.querySelectorAll('.grid-square');
    let color = () => { return `rgb(${Math.floor(Math.random() * 255 + 1)},${Math.floor(Math.random() * 255 + 1)},${Math.floor(Math.random() * 255 + 1)})` }
    squares.forEach(square => {
        square.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = color()
        })
    })
}

let color = document.querySelector(".btn-color")
let rainbow = document.querySelector(".btn-rainbow")
color.addEventListener("click", toggleActive)
rainbow.addEventListener("click", toggleActive)
function toggleActive() {
    let color = document.querySelector(".btn-color")
    let rainbow = document.querySelector(".btn-rainbow")
    
    if (color.classList.contains("active")) {
        rainbow.addEventListener("click", () => {
            color.classList.remove("active")
            rainbow.classList.add("active")
            return rainbowColor()
        })
    } else if (rainbow.classList.contains("active")) {
        color.addEventListener("click", () => {
            rainbow.classList.remove("active")
            color.classList.add("active")
            return changecolor()
        })
    }
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

function deleteGrid() {
    let container = document.querySelector('.container');
    while (container.lastChild) {
        container.removeChild(container.lastChild)
    }
}
