var Idade = parseInt(prompt("Digite a sua idade"))
var Cnh = parseFloat(prompt("Você tem cnh?"))
var CondicaoEspecial = parseFloat(prompt("Você tem alguma condição especial para dirigir"))

cnh = "sim"
CondicaoEspecial = "sim"

if((idade => 18) && (cnh = "sim") || (CondicaoEspecial = "sim") ){
    console.log("Você pode dirigir ")
    alert("você pode dirigir ")
}