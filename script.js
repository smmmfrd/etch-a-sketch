const drawContainer = document.querySelector('#etch-a-sketch');
const sizeChanger = document.querySelector('#size-changer');
const colorPicker = document.querySelector('#color-picker');

var drawing = false;
document.body.onmousedown = () => {drawing = true;};
document.body.onmouseup = () => {drawing = false;};

var eraser = false;
var rainbow = false;

UpdateSize();
BuildGrid();

function GetSize(){
    return Math.pow(2, sizeChanger.value);
}

function UpdateSize(){
    let newSize = GetSize();
    document.querySelector('#sizeDisplay').textContent = `${newSize} x ${newSize}`;
    BuildGrid();
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

    ToggleEraser(true);
    ToggleRainbow(true);
}

function CreateSquare(pixelSize, border=0){
    let sq = document.createElement('div');
    sq.style=`width:${pixelSize - border}px; height:${pixelSize - border}px; margin-bottom:${border}px; margin-right:${border}px; background-color:white;`;

    sq.addEventListener('mousedown', () => {
        sq.style.backgroundColor = GetColorClick();
    });
    sq.addEventListener('mouseover', () => {
        let color = GetColorDrag();
    
        if(color!=null) {
            sq.style.backgroundColor = color;
        }
    });
    
    drawContainer.appendChild(sq);
}

function GetColorClick(){
    if(eraser){
        return "white";
    }
    if(rainbow){
        return GetRandomColor();
    }

    return colorPicker.value;
}

function GetColorDrag(){
    if(drawing){
        return GetColorClick();
    } else {
        return null;
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

function ToggleEraser(clearInput = false){
    eraser = clearInput ? false : !eraser;

    if(eraser){
        document.querySelector('#eraser-button').classList.add("active-button");

        rainbow = false
        document.querySelector('#rainbow-button').classList.remove("active-button");
    } else {
        document.querySelector('#eraser-button').classList.remove("active-button");
    }
}

function ToggleRainbow(clearInput = false){
    rainbow = clearInput ? false : !rainbow;

    if(rainbow){
        document.querySelector('#rainbow-button').classList.add("active-button");

        eraser = false;
        document.querySelector('#eraser-button').classList.remove("active-button");
    } else {
        document.querySelector('#rainbow-button').classList.remove("active-button");
    }
}