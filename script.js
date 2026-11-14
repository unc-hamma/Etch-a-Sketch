const container = document.querySelector('#container');
// const squareDiv = document.querySelector('.square');
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

container.addEventListener('mouseover', e => e.target.closest('.square').style.backgroundColor = 'brown');

function changeSquares(){
    squareNb = prompt("how many square per side you want in the new grid?");
    container.innerHTML = "";
    divHeight = container.clientHeight / squareNb;
    divWidth = container.clientWidth / squareNb;
    squareCreation();
}

changeBtn.addEventListener('click', changeSquares);
