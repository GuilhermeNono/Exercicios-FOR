//3) Faça um algoritmo que imprima a quantidade de números pares e a quantidade de números ímpares em um intervalo digitado pelo usuário;

var userInputStart = parseInt(prompt("Digite o inicio do intervalo"));
var userInputEnd = parseInt(prompt("Digite o fim do intervalo"))

var pares = 0;
var impares = 0;

for (var i = userInputStart; i <= userInputEnd; i++) {
    if (i % 2 === 0) {
        pares++
    } else {
        impares++
    }
}

console.log(`Impares: ${impares} \n Pares: ${pares}`)