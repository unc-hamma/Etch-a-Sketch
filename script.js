const container = document.querySelector('#container');
const squareDiv = document.querySelector('.square');

for(let i = 1; i < 256; i++){
    const clone = squareDiv.cloneNode(true)
    container.append(clone);
}