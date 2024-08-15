let ul = document.createElement('ul')
document.body.appendChild(ul)

document.getElementById('adicionar').addEventListener('click', function() {
    let li = document.createElement('li');
    li.textContent = document.getElementById('texto').value
    ul.appendChild(li)
});

document.getElementById('remover').addEventListener('click', function() {
    let ultimoElemento = ul.lastChild
    ul.removeChild(ultimoElemento)
});