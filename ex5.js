//5) Faça um algoritmo que imprima o somatório de todos os números entre 1 e um valor digitado pelo usuário. Por exemplo, se o usuário digitar o número 4, o programa deverá calcular o somatório 1 + 2 + 3 + 4 = 10.

var userInput = parseInt(prompt("Digite um numero"));

var resultado = 0;

for(var i = 1; i <= userInput; i++) {
    resultado += i
}

console.log(`A soma dos valores é de -> ${resultado}`)