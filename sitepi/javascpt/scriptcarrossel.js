let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 0; // Define o primeiro item como ativo

function loadShow() {
    const spacing = 350; // Espaçamento entre os itens
    const scaleFactor = 0.2; // Fator de escala para itens fora do foco
    const blurAmount = 5; // Quantidade de desfoque
    const rotationAngle = 10; // Ângulo de rotação (em graus)

    items.forEach((item, index) => {
        let offset = (index - active + items.length) % items.length; // Calcula a posição relativa

        if (offset === 0) {
            // Item ativo
            item.style.transform = 'translateX(0) scale(1) perspective(1000px) rotateY(0deg)';
            item.style.opacity = 1;
            item.style.zIndex = 2;
            item.style.filter = 'none';
        } else if (offset === 1 || offset === items.length - 1) {
            // Itens próximos ao ativo
            let direction = offset === 1 ? 1 : -1;
            item.style.transform = `translateX(${direction * spacing}px) scale(0.8) perspective(1000px) rotateY(${direction * -rotationAngle}deg)`;
            item.style.opacity = 0.6;
            item.style.zIndex = 1;
        } else {
            // Itens mais distantes
            let direction = offset > 1 ? 1 : -1;
            item.style.transform = `translateX(${direction * spacing * offset}px) scale(${1 - scaleFactor * offset}) perspective(1000px) rotateY(${direction * -rotationAngle}deg)`;
            item.style.opacity = 0;
            item.style.zIndex = 0;
        }
    });
}

// Inicializa o carrossel
loadShow();

// Evento para navegar para o próximo item
next.onclick = () => {
    active = (active + 1) % items.length;
    loadShow();
};

// Evento para navegar para o item anterior
prev.onclick = () => {
    active = (active - 1 + items.length) % items.length;
    loadShow();
};
