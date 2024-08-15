function contagem(num) {
    document.getElementById('number').innerHTML = num;
}

let cont = 0;

document.getElementById('increment').addEventListener('click', function() { 
    cont++;
    contagem(cont);
});

document.getElementById('desincrement').addEventListener('click', function() { 
    cont--;
    contagem(cont);
});

