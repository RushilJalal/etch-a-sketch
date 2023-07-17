const container = document.querySelector(".container");
const div = document.querySelector("div");

const defaultLen = 24;
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
        square.addEventListener("click", () => {
            square.style.backgroundColor = myPenColor;
        })
        square.addEventListener("mouseover", (e) => {
            if (e.buttons === 1) { //left click drag
                square.style.backgroundColor = myPenColor;
            }
        });
    });
}

const changeGrid = document.querySelector("#change-grid");
changeGrid.addEventListener("click", () => {
    new_length = prompt("Enter new grid size");
    while (container.firstChild)
        container.removeChild(container.firstChild);
    makeGrid(new_length);
})

let myPenColor = "black";
const colorPicker = document.querySelector("#color-picker");

colorPicker.addEventListener("change", (e) => {
    myPenColor = e.target.value;
});
colorPicker.select();