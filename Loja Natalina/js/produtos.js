document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os cards e todos os botões de comprar criados no HTML
    const cards = document.querySelectorAll(".card-produto");
    const botoesComprar = document.querySelectorAll(".btn-comprar");

    // --- EFEITO 1: O card sobe um pouco quando o mouse passa por cima ---
    cards.forEach(card => {
        // Quando o mouse entra no card
        card.addEventListener("mouseenter", () => {
            card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
            card.style.transform = "translateY(-8px)"; // Joga o card para cima
            card.style.boxShadow = "0 10px 25px rgba(16, 40, 61, 0.4)"; // Aumenta a sombra
        });

        // Quando o mouse sai do card (volta ao normal)
        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "0 4px 15px rgba(16, 40, 61, 0.25)";
        });
    });

    // --- EFEITO 2: O botão de comprar brilha quando o mouse passa por cima ---
    botoesComprar.forEach(botao => {
        // Quando o mouse entra no botão
        botao.addEventListener("mouseenter", () => {
            botao.style.transition = "background-color 0.2s ease, filter 0.2s ease, transform 0.2s ease";
            botao.style.backgroundColor = "#d92b38"; // Tom de vermelho mais aceso
            botao.style.filter = "brightness(1.15)"; // Efeito de brilho
            botao.style.transform = "scale(1.02)";    // Cresce um pouquinho
        });

        // Quando o mouse sai do botão (volta ao normal)
        botao.addEventListener("mouseleave", () => {
            botao.style.backgroundColor = "#b3202a"; // Vermelho vibrante original
            botao.style.filter = "brightness(1)";
            botao.style.transform = "scale(1)";
        });
    });
});

