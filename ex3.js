//3) Faça um algoritmo que imprima a quantidade de números pares e a quantidade de números ímpares em um intervalo digitado pelo usuário;

var userInput = parseInt(prompt("Digite um numero"));

var pares = 0;
var impares = 0;

for (var i = 0; i <= userInput; i++) {
    if (i % 2 === 0) {
        pares++
    } else {
        impares++
    }
}

console.log(`Impares: ${impares} \n Pares: ${pares}`)