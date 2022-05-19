var userInput = parseInt(prompt("Digite um numero"));

var resultado = 0;

for (var i = 0; i <= userInput; i++) {
    if (i % 11 == 0) {
        resultado += i
    }
}

console.log(`A soma dos numeros multiplos de 11 no intervalo definido é de -> ${resultado}`);