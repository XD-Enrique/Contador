const addButton = document.getElementById('add');
const delButton = document.getElementById('del');
const resetButton = document.getElementById('reset');
let result = document.getElementById('number');
let contador = parseInt(localStorage.getItem('meuContador')) || 0;

result.innerHTML = contador;

addButton.addEventListener('click', () => {
    contador++;
    result.innerHTML = contador;
    localStorage.setItem('meuContador', contador);
});

delButton.addEventListener('click', () => {
    if (contador > 0) {
        contador--;
    }
    result.innerHTML = contador;
    localStorage.setItem('meuContador', contador);

});

resetButton.addEventListener('click', () => {
    contador = 0;
    result.innerHTML = contador;
    localStorage.removeItem('meuContador');
    localStorage.setItem('meuContador', contador);
})