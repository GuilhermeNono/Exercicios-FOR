/* 
    3 x 0 = 0
    3 x 1 = 3
    ...
    3 x 10 = 30
*/
var tabuada = parseInt(prompt("Digite a o número da tabuada"));

var resultado = 0;

for (var i = 0; i <= 10; i++) {
    resultado = tabuada * i;
    console.log(tabuada + " x " +  i + " = " + resultado);
}


