function somar() {
  const numero1 = parseFloat(document.getElementById("numero1Soma").value);
  const numero2 = parseFloat(document.getElementById("numero2Soma").value);
  let soma = (numero1+numero2);
  // evite mexer no código acima!

  /* use as constantes numero 1 e numero 2 e realize a soma entre elas.
  Em seguida, ao invés de mostrar o numero 10, mostre o resultado da operação */
  
  document.getElementById("resultadoSoma").innerHTML = soma;
}

function subtrair() {
  const numero1 = parseFloat(document.getElementById("numero1Sub").value);
  const numero2 = parseFloat(document.getElementById("numero2Sub").value);
  let subtrai = (numero1-numero2);
  // evite mexer no código acima!

  /* use as constantes numero 1 e numero 2 e realize a subtração entre elas.
   Em seguida, ao invés de mostrar o numero 9, mostre o resultado da operação */
  
  document.getElementById("resultadoSub").innerHTML = subtrai;
}

function multiplicar() {
  const numero1 = parseFloat(document.getElementById("numero1Mult").value);
  const numero2 = parseFloat(document.getElementById("numero2Mult").value);
  let multiplica = (numero1*numero2);
  // evite mexer no código acima!

  /* use as constantes numero 1 e numero 2 e realize a multiplicação entre elas.
   Em seguida, ao invés de mostrar o numero 5, mostre o resultado da operação */
  
  document.getElementById("resultadoMult").innerHTML = multiplica;
}

function dividir() {
  const numero1 = parseFloat(document.getElementById("numero1Div").value);
  const numero2 = parseFloat(document.getElementById("numero2Div").value);
  let divisao = (numero1/numero2);
  // evite mexer no código acima!

  /* use as constantes numero 1 e numero 2 e realize a divisão entre elas.
   Em seguida, ao invés de mostrar o numero -89, mostre o resultado da operação */
  
  document.getElementById("resultadoDiv").innerHTML = divisao;
}
