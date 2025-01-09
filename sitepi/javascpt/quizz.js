let currentQuestion = 1;
const totalQuestions = 15; // Total de perguntas no quiz

// Navegar entre as perguntas
function navegarPerguntas(direction) {
    // Verifica se uma resposta foi selecionada para a pergunta atual
    const respostaSelecionada = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
    if (!respostaSelecionada) {
        alert("Por favor, selecione uma resposta antes de continuar.");
        return; // Não avança para a próxima pergunta
    }

    // Esconde a pergunta atual
    document.getElementById(`q${currentQuestion}`).style.display = "none";

    // Atualiza o número da pergunta com base na direção
    currentQuestion += direction;

    if (currentQuestion > totalQuestions) {
        // Calcula os acertos antes de redirecionar
        calcularAcertos();

        // Redireciona para outra página
        window.location.href = "resultados.html";
        return;
    }

    // Controle de visibilidade dos botões
    if (currentQuestion === totalQuestions) {
        document.getElementById("next").textContent = "Finalizar";
    } else {
        document.getElementById("next").textContent = "Próxima";
    }

    document.getElementById("prev").style.display = currentQuestion > 1 ? "inline-block" : "none";

    // Mostra a próxima pergunta
    document.getElementById(`q${currentQuestion}`).style.display = "block";
}

// Função para calcular os acertos
function calcularAcertos() {
    let acertos = 0; // Inicializa o contador

    for (let i = 1; i <= totalQuestions; i++) {
        // Verifica qual resposta foi marcada para cada pergunta
        const resposta = document.querySelector(`input[name="q${i}"]:checked`);

        // Se a resposta marcada tem valor 1, conta como acerto
        if (resposta && Number(resposta.value) === 1) {
            acertos++;
        }
    }

    // Salva o número total de acertos no localStorage
    localStorage.setItem("quizAcertos", acertos);
}
