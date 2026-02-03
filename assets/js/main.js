const addButton = document.getElementById('add');
const delButton = document.getElementById('del');
const resetButton = document.getElementById('reset');
let result = document.getElementById('number');
let contador = 0;


addButton.addEventListener('click', ()=> {
  contador ++;
  result.innerHTML = `<p>${contador}</p>`;
});

delButton.addEventListener('click', ()=>{
    contador --;
    result.innerHTML = `<p>${contador}</p>`;
});

resetButton.addEventListener('click', ()=>{
    contador = 0;
    result.innerHTML = `<p>${contador}</p>`;
})