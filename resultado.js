document.addEventListener('DOMContentLoaded', () => {
    const respostas = JSON.parse(sessionStorage.getItem('respostas'));
    const respostasCorretas = [0, 1, 2, 3, 0]; // Defina as respostas corretas aqui
    let pontuacao = 0;

    const respostasDiv = document.getElementById('respostas');

    respostas.forEach((resposta, index) => {
        const div = document.createElement('div');
        div.classList.add('question');

        if (resposta == respostasCorretas[index]) {
            div.classList.add('correct');
            pontuacao++;
        } else {
            div.classList.add('incorrect');
        }

        div.innerHTML = `
            <h3>Pergunta ${index + 1}</h3>
            <p>Sua resposta: ${resposta !== null ? 'Opção ' + (parseInt(resposta) + 1) : 'Nenhuma resposta'}</p>
            <p>Resposta correta: Opção ${respostasCorretas[index] + 1}</p>
        `;

        respostasDiv.appendChild(div);
    });

    document.getElementById('pontuacao').innerText = `Pontuação: ${pontuacao}/${respostas.length}`;
});
