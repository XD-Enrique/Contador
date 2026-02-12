const addButton = document.getElementById('add');
const delButton = document.getElementById('del');
const resetButton = document.getElementById('reset');
let result = document.getElementById('number');

let counter = parseInt(localStorage.getItem('myCounter')) || 0;
let colors = JSON.parse(localStorage.getItem('colors')) || {};

result.innerHTML = counter;
updateColor();

addButton.addEventListener('click', () => {
    counter++;
    update();
});

delButton.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
    }
    update();
});

resetButton.addEventListener('click', () => {
    counter = 0;
    colors = {};
    update();
});

function update() {
    result.innerHTML = counter;
    updateColor();
    localStorage.setItem('myCounter', counter);
    localStorage.setItem('colors', JSON.stringify(colors));
}

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updateColor() {
    let group = Math.floor(counter / 50);

    if (!colors[group]) {
        colors[group] = generateRandomColor();
    }

    result.style.color = colors[group];
}
