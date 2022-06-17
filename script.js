const drawContainer = document.querySelector('#etch-a-sketch');

function BuildGrid(){
    let gridDimensions = 16;
    let boxSize = 768 / gridDimensions;

    drawContainer.innerHTML = '';

    // while (drawContainer.firstChild){
    //     drawContainer.removeChild(drawContainer.firstChild);
    // }

    for (let x = 0; x < gridDimensions; x++) {
        for (let y = 0; y < gridDimensions; y++) {
            CreateSquare(boxSize);
        }
    }
}

function CreateSquare(pixelSize){
    let sq = document.createElement('div');
    sq.style=`width:${pixelSize}px;height:${pixelSize}px;background-color:white;`;
    console.log(drawContainer);
    drawContainer.appendChild(sq);
}