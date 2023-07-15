const container = document.querySelector(".container");
const div = document.querySelector("div");

const defaultLen = 16;
function makeGrid(length) {
    for (let i = 0; i < length * length; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.height = `calc(100% / ${length})`;
        cell.style.width = `calc(100% / ${length})`;
        container.appendChild(cell);
    }
    draw();
}

makeGrid(defaultLen);

function draw() {
    const squares = document.querySelectorAll(".cell");
    squares.forEach(square => {
        square.addEventListener("click", () => square.classList.add("hover"));
        square.addEventListener("mouseover", (e) => {
            if (e.buttons === 1) { //left click drag
                square.classList.add("hover");
            }
        });
    });
}

const changeGrid = document.querySelector(".btn");
changeGrid.addEventListener("click", () => {
    new_length = prompt("Enter new grid size");
    while (container.firstChild)
        container.removeChild(container.firstChild);
    makeGrid(new_length);
})
