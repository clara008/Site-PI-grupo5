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
if (respostasCorretas.length > 0) {
    const lista = document.createElement("ul");
    respostasCorretas.forEach((resposta, index) => {
        const item = document.createElement("li");
        item.textContent = `Pergunta ${index + 1}: ${resposta}`;
        lista.appendChild(item);
    });
    respostasElemento.appendChild(lista);
} else {
    respostasElemento.textContent = "Nenhuma resposta correta disponível.";
}
