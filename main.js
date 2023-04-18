/*Autor: DcRubik
  Fecha: 17_04_2023*/

var texto = prompt("Introduzca un texto");
var minuscula = 0
var mayuscula = 0

caracteres = texto.length

for (x = 0; x < texto.length; x++) {
  var fragmento = texto.substr(x, 1);

  if (fragmento == fragmento.toLowerCase()) {
    minuscula++

  } else {
    mayuscula++
  }
}
document.write("Minusculas: " + minuscula + " ")

document.write("Mayusculas: " + mayuscula)



if (minuscula == 0) {
  alert("El texto es mayúscula.")
} else {
  if (mayuscula == 0) {
    alert("El texto es minuscula.")
  } else {
    alert("El texto tiene minusculas y mayusculas.")
  }
}
