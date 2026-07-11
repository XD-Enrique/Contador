const addButton = document.getElementById('add');
const delButton = document.getElementById('del');
const resetButton = document.getElementById('reset');
const startButton = document.getElementById('start');
const cpstButton = document.getElementById('cpsBtn');
let result = document.getElementById('number');
let cpsDisplay = document.getElementById('cpsNumber');

let counter = parseInt(localStorage.getItem('myCounter')) || 0;
let cpsClicks = 0;
let colors = JSON.parse(localStorage.getItem('colors')) || {};
let gameOn = false;

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
    cpsClicks = 0;
    cpsDisplay.innerHTML = cpsClicks;
    countdown();
});

cpstButton.addEventListener('click', () => {
    if (gameOn) {
        cpsClicks++;
        cpsDisplay.innerHTML = cpsClicks;
        cpstButton.blur();
    }
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

function countdown() {
    let sec = 3;
    
    let timeCD = setInterval(function () {
        document.getElementById('realTimer').innerHTML = sec;
        sec--;

        if (sec < 0) {
            clearInterval(timeCD);
            document.getElementById('realTimer').innerHTML = "GO!";
            timer();
        }
    }, 1000);
}

function timer() {
    gameOn = true;
    cpstButton.textContent = '🟢';
    let sec = 5;
    let timer = setInterval(function () {
        document.getElementById('realTimer').innerHTML = sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            gameOn = false;
            ClicksPerSec();
            cpstButton.textContent = '🔴';
        }
    }, 1000);
}

function ClicksPerSec() {
let speedResult;
speedResult = cpsClicks / 5;
cpsDisplay.innerHTML = speedResult;
}