var Aluno; 
var Nota1; 
var Nota2; 
var Nota3; 
var Media; 

// Leia o nome e as três notas de um aluno.
// Calcule e mostre a média aritmética. (parseFloat 
// converte string para ponto flutuante)

Aluno = prompt("Digite o nome do primeiro aluno:");
Nota1 = parseFloat(prompt("Digite a primeira nota do aluno:"));
Nota2 = parseFloat(prompt("Digite a segunda nota do aluno:"));
Nota3 = parseFloat(prompt("Digite a terceira nota do aluno:"));

Media = (Nota1 + Nota2 + Nota3)/3;

alert("A média do(a) aluno(a) " + Aluno + "é: " + Media.toFixed(2));