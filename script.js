const container = document.querySelector('#container');
const squareDiv = document.querySelector('.square');

for(let i = 1; i < 256; i++){
    const clone = squareDiv.cloneNode(true)
    container.append(clone);
    // clone.addEventListener('mouseenter', e => e.target.style.backgroundColor = 'red')
    // const newSquare = document.createElement('div');
    // newSquare.classList.add("square");
    // container.append(newSquare);
}

container.addEventListener('mouseover', e => e.target.closest('.square').style.backgroundColor = 'brown');

// container.addEventListener('mouseout', e => e.target.closest('.square').style.backgroundColor = 'white');