var PrimeiroNumero = parseInt(prompt("Digite o 1 número:"));
var SegundoNumero = parseInt(prompt("Digite o 2 número:"));

var ResultadoSoma = PrimeiroNumero + SegundoNumero

if (ResultadoSoma % 2 == 0){
    console.log(ResultadoSoma, " é par");
}else{
    console.log(ResultadoSoma, " é impar");
}