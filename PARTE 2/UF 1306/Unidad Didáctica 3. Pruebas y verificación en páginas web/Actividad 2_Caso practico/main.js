// Reproducir audio al hacer hover en las imágenes
console.log("La página se ha cargado correctamente.");

// Crear elemento de audio reutilizable (fuera del evento)
const audio = new Audio();
audio.src = "./img/dr-no.mp3";
audio.volume = 0.5; // Volumen al 50%
audio.loop = false; // No repetir
audio.preload = "auto"; // Precargar el audio

// Usar event delegation: escuchar en el documento completo
document.addEventListener("mouseenter", (evento) => {
    // Verificar si el elemento es una imagen con clase img-articulo
    if (evento.target.classList.contains("img-articulo")) {
        console.log(`🎬 Hover en imagen - Reproduciendo audio...`);

        // Reiniciar el audio desde el inicio
        audio.currentTime = 0;

        // Reproducir el audio
        const playPromise = audio.play();

        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log("✓ Audio reproduciéndose.");
            }).catch(error => {
                console.warn("⚠ Error al reproducir:", error.message);
            });
        }
    }
}, true); // true = captura (fase de captura, más sensible)

// Interacción con enlaces del menú lateral (también con event delegation)
document.addEventListener("click", (evento) => {
    if (evento.target.closest(".menu-lateral a")) {
        const enlace = evento.target.closest(".menu-lateral a");
        const href = enlace.getAttribute("href");

        console.log("Has hecho clic en:", enlace.textContent);

        // Si el enlace apunta al modal, desplazar suavemente
        if (href === "#modal") {
            evento.preventDefault(); // Prevenir comportamiento por defecto

            const modal = document.getElementById("modal");
            if (modal) {
                console.log("🎯 Desplazando hacia el modal...");
                modal.scrollIntoView({
                    behavior: "smooth", // Desplazamiento suave
                    block: "center" // Centrar en la pantalla
                });
            }
        }
    }
});
