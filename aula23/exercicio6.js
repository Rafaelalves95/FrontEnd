
function tecladoEvento (x) {
    document.getElementById('div').innerHTML = x;
}

let cont = 0;

document.getElementById('texto').addEventListener('keypress', () => { 
    cont++;
    tecladoEvento(cont);
 });