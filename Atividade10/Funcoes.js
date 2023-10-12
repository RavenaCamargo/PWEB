// Criar duas funções:
// Uma que receba três números como
// parâmetros e retorne o maior deles.
// Usar um arquivo js externo.
// Outra que receba três números e coloque
// em ordem crescente.

document.addEventListener("DOMContentLoaded", function() {
    const N1 = parseFloat(prompt("Digite o primeiro número:"));
    const N2 = parseFloat(prompt("Digite o segundo número:"));
    const N3 = parseFloat(prompt("Digite o terceiro número:"));

    // Função para encontrar o maior número entre três números
    function encontrarMaiorNumero(N1, N2, N3) {
        return Math.max(N1, N2, N3);
    }

    // Função para ordenar três números em ordem crescente
    function ordenarCrescente(N1, N2, N3) {
        const numeros = [N1, N2, N3];
        numeros.sort((a, b) => a - b);
        return numeros;
    }

    // Usando a função para encontrar o maior número
    const maior = encontrarMaiorNumero(N1, N2, N3);
    document.getElementById("encontrarMaiorNumero").textContent = maior;

    // Usando a função para ordenar em ordem crescente
    const numerosOrdenados = ordenarCrescente(N1, N2, N3);
    document.getElementById("ordenarCrescente").textContent = numerosOrdenados.join(", ");
});
