const drawContainer = document.querySelector('#etch-a-sketch');
const sizeChanger = document.querySelector('#size-changer');
const colorPicker = document.querySelector('#color-picker');

var rainbow = false;

UpdateSize();
BuildGrid();

function GetSize(){
    return Math.pow(2, sizeChanger.value);
}

function UpdateSize(){
    let newSize = GetSize();
    document.querySelector('#sizeDisplay').textContent = `${newSize} x ${newSize}`;
}

function BuildGrid(){
    let gridDimensions = GetSize();
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
        let color = GetColor();

        if(color!=null) {
            sq.style.backgroundColor = color;
        }
    });
    
    drawContainer.appendChild(sq);
}

function GetColor(){
    if(!rainbow){
        return colorPicker.value;
    } else {
        return GetRandomColor();
    }
}

function GetRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

function Eraser(){
    currentColor = "white";
}

function ToggleRainbow(){
    rainbow = !rainbow;
}