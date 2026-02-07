const addButton = document.getElementById('add');
const delButton = document.getElementById('del');
const resetButton = document.getElementById('reset');
let result = document.getElementById('number');
let contador = 0;


addButton.addEventListener('click', () => {
    contador++;
    result.innerHTML = contador;
});

delButton.addEventListener('click', () => {
    if (contador > 0) {
        contador--;
    }
    result.innerHTML = contador;
});

resetButton.addEventListener('click', () => {
    contador = 0;
    result.innerHTML = contador;
})