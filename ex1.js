//1) Faça um algoritmo que imprima todos os números ímpares no intervalo entre 1 e 30 (incluindo ambos).
var resultado = 0;
for(var i = 0; i <= 30; i++) {
    if(i % 2 !== 0) {
        console.log(`${i}`)
    }
}