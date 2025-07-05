const botaoMensagem = document.getElementById('botaoMensagem');
const mensagemSaida = document.getElementById('mensagemSaida');

if (botaoMensagem && mensagemSaida) {
    botaoMensagem.addEventListener('click', function() {
        const mensagem = "Olá, Humberto! Que sua jornada no desenvolvimento seja repleta de aprendizado e sucesso!";
        mensagemSaida.textContent = mensagem;
    });
} else {
    console.error("Erro");
}