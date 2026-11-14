const container = document.querySelector('#container');
const changeBtn = document.querySelector('button');

let squareNb = 16; 
let divHeight = container.clientHeight / squareNb; 
let divWidth = container.clientWidth / squareNb;

function squareCreation(){
    for(let i = 0; i < squareNb * squareNb; i++){
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('square');
        squareDiv.style.height = `${divHeight}px`;
        squareDiv.style.width = `${divWidth}px`;
        container.append(squareDiv);
    }
}
squareCreation();   

function randomColor(e){
    let red = Math.floor(Math.random() * 255) ;
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    e.target.closest('.square').style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

container.addEventListener('mouseover', randomColor);

function changeSquares(){
    squareNb = prompt("how many square per side you want in the new grid?");
    container.innerHTML = "";
    divHeight = container.clientHeight / squareNb;
    divWidth = container.clientWidth / squareNb;
    squareCreation();
}

changeBtn.addEventListener('click', changeSquares);
