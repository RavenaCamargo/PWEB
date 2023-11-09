console.log('primeiro exemplo');

console.log('1');
t();
console.log('3');
function t(){
    console.log('2');
}

console.log('1');
t();
console.log('3');
function t(){
    setTimeout(function(){
        console.log('2');
    }, 10);
}

var soma = 0;
for (var i=2; i<ProcessingInstruction.argv.lenghth-1;1++)
    soma = soma + Number(process.argv[i]);
console.log('soma='+soma);

const fs = require ('fs');
const { callbackify } = require('util');
const data = fs.readFileSync('file.txt');
// a execução é bloqueada aqui até o arquivo ser lido
console.log(data.toString());

//EXEMPLO DE CALLBACK
const prompt = require('prompt-sysc')();
//npm install prompt-sync 
function saudacao(nome) {
    console.log('OI' + nome);
}
function
entradaNome(CALLBACK){
    varNome = prompt ('Digite seu nome:');
    CALLBACK(nome);
}
entradaNome(saudacao);

functionexibeMensagensNaOrdem(mensagem, callback){
    console.log(mensagem);
    CALLBACK();
}
//executando
exibeMensagensNaOrdem('Essa é a primeira mensagem exibida na ordem', function(){
    console.log('Essa é a segunda mensagem exibida na ordem');
});

//funcao para imprimir a primeira parte
function Parte1(){
    for (var i=1;i<= 10; i++){
        console.log('primeira parte:' + i);
    }
}

setTimeout(Parte1, 2000); // para atrasar
const fs = require("fs");
fs.readFile("file.txt", (err, data)=> {
    if (err) throw err;
    const registros = data.toString().split("\n");

    registros.forEach((registro, index) => {
        console.log("segunda parte:"+ registro);
    });
});

var eventos = require('events');
//Atribuição da classe EventEmitter a uma variável 
var EmissorEventos = eventos.EventEmitter;

//Criação de um instancia do EventEmmittervariável
var ee = new EmissorEventos();

//ou criando direto sem a variavel intermediaria
//var ee = new evenntos.EventEmitter(); mas da forma anterior é + pratica

//É registrado um ouvinte (listener)para o evento 'dados';

ee.on(dados,function(fecha){
    console.log(fecha);
});

setInterval(function(){
    ee.emit(dados, Date.now());
}, 500);

var http = require('http');
var server = http.createServer(function(req,res){
    res.end("<html><body>Site da Fatec Sorocaba</html></body>");
});
server.listen(3000);

var http = require('http');
var server = http.createServer(function(req,res){
    var opcao = req.url;
    if(opcao=='/historia'){
        res.end("<html><body>Historia da Fatec de Sorocaba</html></body>");
    }
    else if(opcao=='/cursos'){
        res.end("<html><body>Cursos</html></body>");
    }
    else if(opcao=='/professores'){
        res.end("<html><body>Professores</html></body>");
    }
    else
    res.end("<html><body>Site da Fatec Sorocaba</html></body>");
});
server.listen(3000);

//instalar: npm install express@4.15.3 -- save
//instalar: npm install nodemon -- save-dev
