document.addEventListener("DOMContentLoaded", function () {
    const cardsAno = document.querySelector(".cards-ano");
    const moveLeft = document.getElementById("move-left");
    const moveRight = document.getElementById("move-right");
    const scrollAmount = 300; // Ajuste para definir a distância do scroll

    moveLeft.addEventListener("click", () => {
        cardsAno.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });
    });

    moveRight.addEventListener("click", () => {
        cardsAno.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    });
});
//Botão do menu

const menuButton = document.querySelector('#menu-toggle');
const navMenu = document.querySelector('.navheader-principal');


menuButton.addEventListener('click', () => {

    navMenu.classList.toggle('open');
});
