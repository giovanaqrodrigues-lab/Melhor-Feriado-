document.addEventListener("DOMContentLoaded", () => {
    function criarNeve() {
        const floco = document.createElement("div");
        floco.classList.add("floco-neve");

        // Símbolos variados para dar naturalidade
        const simbolos = ["❄", "❅", "❆", "•"];
        floco.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];

        // Posição horizontal aleatória na tela (de 0% a 100%)
        floco.style.left = Math.random() * 100 + "vw";

        // Tamanhos variados para os flocos (de 12px a 24px)
        const tamanho = Math.random() * 12 + 12;
        floco.style.fontSize = tamanho + "px";

        // Velocidade de queda variada (de 3 a 7 segundos)
        const duracao = Math.random() * 4 + 3;
        floco.style.animationDuration = duracao + "s";

        document.body.appendChild(floco);

        // Remove o elemento do HTML após o término da animação para manter o site leve
        setTimeout(() => {
            floco.remove();
        }, duracao * 1000);
    }

    // Cria um novo floco de neve a cada 300 milissegundos
    setInterval(criarNeve, 300);
});
document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("slideshow-track");
    const slides = document.querySelectorAll(".slide");
    const btnPrev = document.getElementById("btn-prev");
    const btnNext = document.getElementById("btn-next");
    const container = document.querySelector(".slideshow-container");

    let indexAtual = 0;
    const totalSlides = slides.length;

    // --- 1. NAVEGAÇÃO HORIZONTAL POR BOTÕES ---
    function atualizarSlide() {
        if (track) {
            track.style.transform = `translateX(-${indexAtual * 100}%)`;
        }
    }

    if (btnNext) {
        btnNext.addEventListener("click", () => {
            indexAtual = (indexAtual + 1) % totalSlides;
            atualizarSlide();
        });
    }

    if (btnPrev) {
        btnPrev.addEventListener("click", () => {
            indexAtual = (indexAtual - 1 + totalSlides) % totalSlides;
            atualizarSlide();
        });
    }

    // --- 2. EFEITO PARALLAX VERTICAL NAS IMAGENS AO ROLAR ---
    const imagensSlide = document.querySelectorAll(".slide img");

    window.addEventListener("scroll", () => {
        if (!container) return;

        const posicaoContainer = container.getBoundingClientRect();
        const alturaJanela = window.innerHeight;

        // Se o slideshow estiver visível na tela, calcula o movimento
        if (posicaoContainer.top < alturaJanela && posicaoContainer.bottom > 0) {
            // Fator 0.15 controla a velocidade do parallax (menor = mais lento)
            const deslocamento = (posicaoContainer.top - alturaJanela / 2) * 0.15;

            imagensSlide.forEach(img => {
                // Move a imagem verticalmente
                img.style.transform = `translateY(${deslocamento}px)`;
            });
        }
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const spanDias = document.getElementById("dias");
    const spanHoras = document.getElementById("horas");
    const spanMinutos = document.getElementById("minutos");

    function atualizarRelogioNatal() {
        if (!spanDias || !spanHoras || !spanMinutos) return;

        const agora = new Date();
        const anoAtual = agora.getFullYear();
        let natal = new Date(anoAtual, 11, 25, 0, 0, 0); // 25 de Dezembro

        // Se o Natal já passou este ano, calcula para o próximo ano
        if (agora > natal) {
            natal = new Date(anoAtual + 1, 11, 25, 0, 0, 0);
        }

        const diferenca = natal - agora;

        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));

        // Formata para ter sempre 2 dígitos (ex: "02" em vez de "2")
        spanDias.textContent = String(dias).padStart(2, '0');
        spanHoras.textContent = String(horas).padStart(2, '0');
        spanMinutos.textContent = String(minutos).padStart(2, '0');
    }

    // Atualiza a cada 1 segundo
    setInterval(atualizarRelogioNatal, 1000);
    atualizarRelogioNatal();
});

const botaoMusica = document.getElementById('btn-musica');
const audioNatalino = document.getElementById('audio-natalino');

if (botaoMusica && audioNatalino) {
    botaoMusica.addEventListener('click', () => {
        if (audioNatalino.paused) {
            audioNatalino.play();
            botaoMusica.textContent = '⏸️ Pausar Música';
        } else {
            audioNatalino.pause();
            botaoMusica.textContent = '🎵 Tocar Música';
        }
    });
}
