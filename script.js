const gridContainer = document.getElementById("gridContainer");
let rows = 16;
let col = 16;

function createGrid () {
    rows = parseInt(document.getElementById("rows").value);
    col = parseInt(document.getElementById("col").value);
    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateColumns = "repeat(${cols}, 20px"
    for (let i = 0; i < rows * col; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("mouseover", mouseEvent => {
            cell.classList.add("active");
        });
        cell.addEventListener("mouseout", mouseEvent => {
            cell.classList.remove("active");
        });
        gridContainer.appendChild(cell);
        cell.addEventListener("pointerdown", PointerEvent => {
            cell.style.backgroundColor = "pink";
        });
        cell.addEventListener("dblclick", MouseEvent => {
            cell.style.backgroundColor = "white";
        })
    }; 
}

function clearGrid () {
    const cells = gridContainer.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.style.backgroundColor = "";
    });
}

createGrid ();




