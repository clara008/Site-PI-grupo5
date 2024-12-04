let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 3;

function loadShow() {
    let stt = 0;

    // Resetando os estilos dos itens
    items.forEach(item => {
        item.style.transform = 'none';
        item.style.zIndex = 0;
        item.style.filter = 'none';
        item.style.opacity = 1;
    });

    // Item ativo
    items[active].style.transform = 'none';
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    // Itens à direita do ativo
    for (let i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }

    // Itens à esquerda do ativo
    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}

loadShow();

next.onclick = function() {
    // Garantir que o próximo índice não ultrapasse o limite
    active = (active + 1 < items.length) ? active + 1 : active;
    loadShow();
};

prev.onclick = function() {
    // Garantir que o índice anterior não seja negativo
    active = (active - 1 >= 0) ? active - 1 : active;
    loadShow();
};
