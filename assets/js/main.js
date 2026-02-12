const addButton = document.getElementById('add');
const delButton = document.getElementById('del');
const resetButton = document.getElementById('reset');
let result = document.getElementById('number');

let contador = parseInt(localStorage.getItem('meuContador')) || 0;
let colors = JSON.parse(localStorage.getItem('cores')) || {};

result.innerHTML = contador;
atualizarCor();

addButton.addEventListener('click', () => {
    contador++;
    atualizar();
});

delButton.addEventListener('click', () => {
    if (contador > 0) {
        contador--;
    }
    atualizar();
});

resetButton.addEventListener('click', () => {
    contador = 0;
    colors = {};
    atualizar();
});

function atualizar() {
    result.innerHTML = contador;
    atualizarCor();
    localStorage.setItem('meuContador', contador);
    localStorage.setItem('cores', JSON.stringify(colors));
}

function gerarCorAleatoria() {
    const letras = '0123456789ABCDEF';
    let cor = '#';
    for (let i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
}

function atualizarCor() {
    let grupo = Math.floor(contador / 50);

    if (!colors[grupo]) {
        colors[grupo] = gerarCorAleatoria();
    }

    result.style.color = colors[grupo];
}
