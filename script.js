const gridDiv = document.querySelector('#grid-div');

createGrid(10);

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
