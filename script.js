const drawContainer = document.querySelector('#etch-a-sketch');

BuildGrid();

function BuildGrid(){
    let gridDimensions = 16;
    let boxSize = 768 / gridDimensions;

    drawContainer.innerHTML = '';

    // while (drawContainer.firstChild){
    //     drawContainer.removeChild(drawContainer.firstChild);
    // }

    for (let x = 0; x < gridDimensions; x++) {
        for (let y = 0; y < gridDimensions; y++) {
            CreateSquare(boxSize, 1);
        }
    }
}

function CreateSquare(pixelSize, border=0){
    let sq = document.createElement('div');
    sq.style=`width:${pixelSize - border}px; height:${pixelSize - border}px; margin-bottom:${border}px; margin-right:${border}px; background-color:white;`;

    sq.addEventListener('mouseover', () => {
        sq.style.backgroundColor = "black";
    });
    
    drawContainer.appendChild(sq);
}