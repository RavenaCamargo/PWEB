// Criando uma pesquisa
// Durante o lançamento de um filme, 45 pessoas assistiram. Na saída
// foi realizada uma pesquisa informando a idade, sexo e a opinião,
// onde: ótimo=4, bom=3, regular=2, péssimo=1.
// Fazer uma aplicação utilizando JavaScript que receba os dados
// (idade, sexo e opinião) e retornar:
//  a média da idade das pessoas que responderam ao questionário;
//  a idade da pessoa mais velha;
//  a idade da pessoa mais nova;
//  a quantidade de pessoas que responderam péssimo;
// a porcentagem de pessoas que responderam ótimo e bom;
//  o número de mulheres e homens que responderam ao 
// questionário


let idades = [];
let opinioes = [];
let sexos = [];

function calcularResultados() {
    const idade = parseInt(document.getElementById('idade').value);
    const opiniao = parseInt(document.getElementById('opiniao').value);
    const sexo = document.getElementById('sexo').value;

    idades.push(idade);
    opinioes.push(opiniao);
    sexos.push(sexo);

    const mediaIdade = calcularMediaIdade();
    const pessoaMaisVelha = Math.max(...idades);
    const pessoaMaisNova = Math.min(...idades);
    const pessimoCount = contarOpinioes(1);
    const otimoBomPercent = calcularPorcentagemOtimoBom();
    const mulherCount = contarSexo('mulher');
    const homemCount = contarSexo('homem');

    document.getElementById('media-idade').textContent = mediaIdade.toFixed(2);
    document.getElementById('mais-velha').textContent = pessoaMaisVelha;
    document.getElementById('mais-nova').textContent = pessoaMaisNova;
    document.getElementById('pessimo-count').textContent = pessimoCount;
    document.getElementById('otimo-bom-percent').textContent = otimoBomPercent;
    document.getElementById('mulher-count').textContent = mulherCount;
    document.getElementById('homem-count').textContent = homemCount;
}

function calcularMediaIdade() {
    const somaIdades = idades.reduce((total, idade) => total + idade, 0);
    return somaIdades / idades.length;
}

function contarOpinioes(opiniao) {
    return opinioes.filter(o => o === opiniao).length;
}

function calcularPorcentagemOtimoBom() {
    const otimoBomCount = opinioes.filter(o => o === 4 || o === 3).length;
    const totalRespostas = opinioes.length;
    return (otimoBomCount / totalRespostas * 100).toFixed(2);
}

function contarSexo(sexo) {
    return sexos.filter(s => s === sexo).length;
}

