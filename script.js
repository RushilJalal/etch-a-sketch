const container = document.querySelector(".container");
const div = document.querySelector("div");

function makeGrid(rows, cols) {
    for (i = 0; i < rows * cols; i++) {
        const cell = document.createElement("div");
        // cell.textContent = i+1;
        cell.classList.add("cell");
        container.appendChild(cell);
    }
}

makeGrid(16, 16);

const squares = document.querySelectorAll(".cell");
squares.forEach(square => {
    square.addEventListener("mouseover", () => {
        square.classList.add("hover")
    });
});
