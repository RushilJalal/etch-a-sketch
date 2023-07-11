const container = document.querySelector(".container");
const div = document.querySelector("div");

function makeGrid(rows, cols) {
    for (i = 0; i < rows * cols; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        // cell.innerText = i+1;
        container.appendChild(cell);
    }
}

makeGrid(16,16);