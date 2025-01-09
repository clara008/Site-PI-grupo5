// Recupera o número de acertos do localStorage
const acertos = localStorage.getItem("quizAcertos");
const totalPerguntas = 15;

// Elementos do DOM
const pontuacaoElemento = document.getElementById("pontuacao");
const respostasElemento = document.getElementById("respostas");

// Exibe a pontuação do usuário
if (acertos !== null) {
    pontuacaoElemento.textContent = `Você acertou ${acertos} de ${totalPerguntas} perguntas.`;
} else {
    pontuacaoElemento.textContent = "Nenhum resultado encontrado. Faça o quiz novamente.";
}

// Cria e exibe a lista de respostas corretas
const respostasCorretas = [
    "Ele foi à festa com seus amigos",
    "Feiúra, Enjoo, Por",
    "Quando você vir o João, diga a ele que chegarei amanhã.",
    "Ele não sabia o mal que aquilo faria.",
    "Discrição",
    "Se ele fizer isso, todos ficarão felizes.",
    "O censo revelou dados importantes sobre a população.",
    "Vou à casa da minha tia amanhã.",
    "Café, Maracujá, Baú",
    "É uma proparoxítona.",
    "Apenas as alternativas B e C estão corretas.",
    "Não entendi o motivo por quê ele agiu assim.",
    "Todas as alternativas estão corretas.",
    "É uma proparoxítona.",
    "Auto-escola"
];

if (respostasCorretas.length > 0) {
    const lista = document.createElement("ul");
    respostasCorretas.forEach((resposta, index) => {
        const item = document.createElement("li");
        item.textContent = `Pergunta ${index + 1}: - Resposta: ${resposta}`;
        lista.appendChild(item);
    });
    respostasElemento.appendChild(lista);
} else {
    respostasElemento.textContent = "Nenhuma resposta correta disponível.";
}
