document.addEventListener("DOMContentLoaded", () => {

    // APARICIÓN PROGRESIVA DE FOTOS HORIZONTALES (UNA TRAS OTRA)
    const fotosScroll = document.querySelectorAll(".foto-animada");

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                // Selecciona todas las fotos dentro del contenedor
                const todasLasFotos = Array.from(fotosScroll);
                
                todasLasFotos.forEach((foto, indice) => {
                    // Les da un retraso progresivo (0ms, 300ms, 600ms, 900ms) para que aparezcan una tras otra
                    setTimeout(() => {
                        foto.classList.remove("oculto");
                        foto.classList.add("visible");
                    }, indice * 300);
                });
            }
        });
    }, {
        threshold: 0.2
    });

    if (fotosScroll.length > 0) {
        observador.observe(fotosScroll[0].parentElement);
    }

    // VENTANA INFORMATIVA DE FOTOS (SEGUNDO HTML)
    const fotoCards = document.querySelectorAll(".foto-card");
    const modal = document.getElementById("modal-informacion");
    const textoMensaje = document.getElementById("texto-mensaje");
    const btnCerrar = document.getElementById("cerrar-modal");

    if (fotoCards.length > 0 && modal) {
        fotoCards.forEach(card => {
            card.addEventListener("click", () => {
                const mensaje = card.getAttribute("data-mensaje");
                textoMensaje.textContent = mensaje;
                modal.classList.remove("oculto");
            });
        });

        btnCerrar.addEventListener("click", () => {
            modal.classList.add("oculto");
        });

        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.add("oculto");
            }
        });
    }
});