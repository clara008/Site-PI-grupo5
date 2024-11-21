let perguntaAtual = 1; // Começa na primeira pergunta
const totalPerguntas = 4; // Número total de perguntas

// Função para navegar entre perguntas
function navegarPerguntas(direcao) {
    // Esconde a pergunta atual
    document.getElementById(`q${perguntaAtual}`).style.display = 'none';

    // Atualiza o número da pergunta atual
    perguntaAtual += direcao;

    // Mostra a nova pergunta
    document.getElementById(`q${perguntaAtual}`).style.display = 'block';

    // Atualiza os botões
    atualizarBotoes();
}

// Atualiza visibilidade dos botões "Anterior", "Próxima" e "Enviar"
function atualizarBotoes() {
    document.getElementById('prev').style.display = perguntaAtual > 1 ? 'inline-block' : 'none';
    document.getElementById('next').style.display = perguntaAtual < totalPerguntas ? 'inline-block' : 'none';
    document.getElementById('submit').style.display = perguntaAtual === totalPerguntas ? 'inline-block' : 'none';
}

// Função para enviar as respostas
function enviarRespostas() {
    let respostas = [];
    for (let i = 1; i <= totalPerguntas; i++) {
        const opcaoSelecionada = document.querySelector(`input[name="q${i}"]:checked`);
        respostas.push(opcaoSelecionada ? opcaoSelecionada.value : null);
    }

    // Armazena as respostas no sessionStorage
    sessionStorage.setItem('respostas', JSON.stringify(respostas));

    // Redireciona para a página de resultados
    window.location.href = 'resultado.html';
}
