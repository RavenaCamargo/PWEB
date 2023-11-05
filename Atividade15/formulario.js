function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var comentario = document.getElementById("comentario").value;
    var pesquisaSim = document.getElementById("pesquisa-sim").checked;

    if (nome.length < 10 || !email.includes("@") || !email.includes(".") || comentario.length < 20) {
        alert("Por favor, preencha os campos corretamente.");
        return false;
    }

    var pergunta = document.querySelector(".pergunta");
    pergunta.style.display = "block"; // Mostra a pergunta

    if (pesquisaSim) {
        pergunta.innerText = "Volte sempre à esta página!";
    } else {
        pergunta.innerText = "Que bom que você voltou a visitar esta página!";
    }

    return false;
}
