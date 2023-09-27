//Criando um jogo
// "Pedra, papel ou tesoura" é um jogo clássico para 2 pessoas. Cada
// jogador escolhe pedra, papel ou tesoura. Neste exercício o jogador
// irá jogar com o computador. Os resultados possíveis são:
// Empate.
// Pedra quebra tesoura.
// Tesoura corta papel.
// Papel cobre a pedra.
// Fases:
// a. O usuário faz uma escolha
// b. O computador faz uma escolha (método random – ponto flutuante 
// aleatórios [0, 1) , 0 (inclusivo) até, mas não incluindo, 1 (exclusivo)). Sugestão divida
// 0.99 em 3 partes.
// c. A partir das duas escolhas determinar o vencedor

function userChoice(user) {
    const choices = ['pedra', 'papel', 'tesoura'];
    const randomIndex = Math.floor(Math.random() * 3);
    const computer = choices[randomIndex];

    const result = determineWinner(user, computer);

    displayResult(user, computer, result);
}

function determineWinner(user, computer) {
    if (user === computer) {
        return 'Empate';
    } else if ((user === 'pedra' && computer === 'tesoura') ||
               (user === 'tesoura' && computer === 'papel') ||
               (user === 'papel' && computer === 'pedra')) {
        return 'Você venceu!';
    } else {
        return 'Computador venceu!';
    }
}

function displayResult(user, computer, result) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Você escolheu ${user}. O computador escolheu ${computer}. Resultado: ${result}`;
}
