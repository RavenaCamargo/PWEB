var Num1;
var Num2;

// Receba dois números e calcule e mostre:
// a soma dos dois;
// a subtração do primeiro pelo segundo;
// o produto dos dois;
// a divisão do primeiro pelo segundo;
// o resto da divisão do primeiro pelo segundo.

Num1 = parseFloat(prompt("Digite o primeiro numero:"));
Num2 = parseFloat(prompt("Digite o segundo numero:"));

// Calcula a soma
var soma = Num1 + Num2;

// Calcula a subtração do primeiro pelo segundo
var subtracao = Num1 - Num2;

// Calcula o produto dos dois números
var produto = Num1 * Num2;

// Calcula a divisão do primeiro pelo segundo
var divisao = Num1 / Num2;

// Calcula o resto da divisão do primeiro pelo segundo
var resto = Num1 % Num2;

alert("A Soma de " + Num1 + " + " + Num2 + " é: " + soma.toFixed(2));
alert("A Subtração de " + Num1 + " - " + Num2 + " é: " + subtracao.toFixed(2));
alert("O produto de " + Num1 + " * " + Num2 + " : " + produto.toFixed(2));
alert("A divisão de " + Num1 + " / " + Num2 + " é: " + divisao.toFixed(2));
alert("O resto da divisão de " + Num1 + " / " + Num2 + " é: " + resto.toFixed(2));

