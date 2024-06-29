const gridContainer = document.getElementById("gridContainer");
for (let i = 0; i < 16; i++) {
    for (let y = 0; y < 16; y++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    gridContainer.appendChild(cell);
    }
}



