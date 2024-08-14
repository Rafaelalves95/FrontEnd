//Exercício 1: 
/*
function verificarIdade(a)
{
    if (a < 18) {
        alert("Você é menor de idade!");
    }
    else if (a >= 18 && a <= 65) {
        alert("Você é adulto!");
    }
    else {
        alert("Você é idoso");
    }
}

let idade = prompt("Digite sua idade!");
verificarIdade(idade)

//Exercício 2:

let notaAluno = prompt("Digite sua nota");

function converterNota(nota) {

    switch(nota) {
        case 0:
            console.log("F");
            break;
        case 1:
            console.log("E");
            break;
        case 2:
            console.log("D");
            break;
        case 3:
            console.log("C")
            break;
        case 4:
            console.log("B")
            break;
        case 5:
            console.log("A")
            break;
        default:
            console.log("Nota inválida");
    }
}

converterNota(parseInt(notaAluno));

//Exercício 3:

function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

tabuada(5);

function contagemRegressiva(numero) {
    while (numero >= 0) {
        console.log(numero);
        numero--;
    }
}
contagemRegressiva(5);

//Exercício 4:

function calculadora (num1, num2, operacao){
    switch (operacao){
        case '+':
            return num1 + num2;
        
        case '-':
            return num1 - num2;
            
        case '*':
            return num1 * num2;
        
        case '/':
            return num1 / num2;
    }
}
console.log(calculadora(2,3,'+'));
console.log(calculadora(7,2,'-'));
console.log(calculadora(10,10,'*'));
console.log(calculadora(30,10,'/'));


function soma (num1,num2){
    return num1 + num2;
}
console.log(soma(30,77));

*/