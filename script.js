const gridDiv = document.querySelector('#grid-div');

const btn = document.querySelector('#size');

btn.addEventListener('click', () => {
    let size = prompt("Enter a number between 1-100");
    if (size >= 1 && size <= 100) {
        createGrid(size);
    }
})

function createGrid(gridSize) {
    gridDiv.style.setProperty('--columns-rows', gridSize);
    
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const div = document.createElement('div');
        div.style.border = '1px solid black';
        gridDiv.appendChild(div);

        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        });
    }
}
