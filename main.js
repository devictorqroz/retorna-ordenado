
var valorDigitado = document.getElementById("valorDigitado");
var botaoResultado = document.getElementById("resultado");

var tamanho = 0;
var numeros = [];


function pegarTamanho() {
  tamanho = parseInt(valorDigitado.value); 
}


function preencherNumeros() {
  for(i = 0; i < tamanho; i++) {
    numeros[i] = Math.round(Math.random() * 100);
  }
  document.write("<br> O Array que foi gerado: " + numeros);
}


function retornaOrdenado() {
  var i, j, aux = 0;
  for(i = 0; i < numeros.length; i++) {
    for(j = 0; j < numeros.length; j++) {
      if(numeros[j] > numeros[j+1]) {
        aux = numeros[j+1];
        numeros[j+1] = numeros[j];
        numeros[j] = aux;
      }
    }
  }
  document.write("<br> O array ordenado em ordem crescente: " + numeros);
}


function executar() {
  pegarTamanho();
  preencherNumeros();
  retornaOrdenado();
}


botaoResultado.onclick = executar;


