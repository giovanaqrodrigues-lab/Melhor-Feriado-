
const track = document.getElementById("slideshow-track");
const slidesOriginais = document.querySelectorAll(".slideshow-container .slide");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");

if (track && slidesOriginais.length > 0) {
    // Clona o primeiro e o último slide para fazer o loop perfeito sem dar solavanco
    const primeiroClone = slidesOriginais[0].cloneNode(true);
    const ultimoClone = slidesOriginais[slidesOriginais.length - 1].cloneNode(true);

    track.appendChild(primeiroClone);
    track.insertBefore(ultimoClone, slidesOriginais[0]);

    const todosSlides = document.querySelectorAll(".slideshow-container .slide");
    let indice = 1; // Começa no primeiro slide real (após o clone do último)
    let tempoTroca = 3000; // 3 segundos fixos
    let temporizador = null;

    // Posiciona no slide inicial sem animação
    track.style.transform = `translateX(-${indice * 100}%)`;

    function atualizarPosicao(comAnimacao = true) {
        if (comAnimacao) {
            track.style.transition = "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)";
        } else {
            track.style.transition = "none";
        }
        track.style.transform = `translateX(-${indice * 100}%)`;
    }

    function proximo() {
        if (indice >= todosSlides.length - 1) return;
        indice++;
        atualizarPosicao(true);
    }

    function anterior() {
        if (indice <= 0) return;
        indice--;
        atualizarPosicao(true);
    }

    // Trata o looping contínuo quando a transição termina
    track.addEventListener("transitionend", () => {
        if (todosSlides[indice] === primeiroClone) {
            track.style.transition = "none";
            indice = 1;
            track.style.transform = `translateX(-${indice * 100}%)`;
        }
        if (todosSlides[indice] === ultimoClone) {
            track.style.transition = "none";
            indice = todosSlides.length - 2;
            track.style.transform = `translateX(-${indice * 100}%)`;
        }
    });

    // Reinicia o contador de 3 segundos sempre que houver ação
    function reiniciarTemporizador() {
        clearInterval(temporizador);
        temporizador = setInterval(proximo, tempoTroca);
    }

    if (btnNext) {
        btnNext.addEventListener("click", () => {
            proximo();
            reiniciarTemporizador(); // Espera 3 segundos completos após o clique
        });
    }

    if (btnPrev) {
        btnPrev.addEventListener("click", () => {
            anterior();
            reiniciarTemporizador(); // Espera 3 segundos completos após o clique
        });
    }

    // Inicia a troca automática a cada 3 segundos
    reiniciarTemporizador();
}

// ----------------------------------------------------
// CRONÔMETRO REAL PARA O NATAL (SEM ÁUDIO)
// ----------------------------------------------------

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
