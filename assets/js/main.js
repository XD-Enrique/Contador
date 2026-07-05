const addButton = document.getElementById('add');
const delButton = document.getElementById('del');
const resetButton = document.getElementById('reset');
const startButton = document.getElementById('start');
let result = document.getElementById('number');

let counter = parseInt(localStorage.getItem('myCounter')) || 0;
let colors = JSON.parse(localStorage.getItem('colors')) || {};

result.innerHTML = counter;
updateColor();

addButton.addEventListener('click', () => {
    counter++;
    update();
    addButton.blur()
});

delButton.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
    }
    update();
    delButton.blur()
});

resetButton.addEventListener('click', () => {
    counter = 0;
    colors = {};
    update();
});

startButton.addEventListener('click', () => {
    countdown();
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

function countdown(){
    let sec = 3;
    let timeCD = setInterval (function(){
        document.getElementById('realTimer').innerHTML = sec;
        sec--;

        if (sec < 0){
            clearInterval(timeCD);
            document.getElementById('realTimer').innerHTML = "GO!";
            timer();
        }
    }, 1000);
}

function timer(){
    let sec = 10;
    let timer = setInterval(function(){
        document.getElementById('realTimer').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}