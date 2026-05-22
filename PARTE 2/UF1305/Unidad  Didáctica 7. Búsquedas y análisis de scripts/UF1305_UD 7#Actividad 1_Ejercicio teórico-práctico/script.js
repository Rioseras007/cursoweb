let nieveActivada = false;
let snowRunning = false;

function toggleNieve() {
    const btn = document.getElementById("btnNieve");
    if (snowRunning) {
        if (window.stopSnow) window.stopSnow();
        snowRunning = false;
        if (btn) btn.innerHTML = "Activar nieve ❄️";
    } else {
        if (!nieveActivada) {
            nevar();
        } else if (window.startSnow) {
            window.startSnow();
        }
        snowRunning = true;
        if (btn) btn.innerHTML = "Desactivar nieve ❄️";
    }
}

function nevar() {
    if (nieveActivada) return;
    nieveActivada = true;
    snowRunning = true;

    const canvas = document.getElementById("snowCanvas");
    const ctx = canvas.getContext("2d");

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const flakes = [];
    let numFlakes = 600; // 👈 clave para que NO se bloquee

    const slider = document.getElementById("intensidadNieve");
    if (slider) {
        numFlakes = parseInt(slider.value);
        slider.addEventListener("input", function() {
            let newNumFlakes = parseInt(this.value);
            if (newNumFlakes > flakes.length) {
                // Añadir más copos
                for (let i = flakes.length; i < newNumFlakes; i++) {
                    flakes.push(new Snowflake());
                }
            } else if (newNumFlakes < flakes.length) {
                // Eliminar copos sobrantes
                flakes.splice(newNumFlakes);
            }
        });
    }

    class Snowflake {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.radius = Math.random() * 2.5 + 0.5;

            this.speed = Math.random() * 1 + 0.3;
            this.wind = Math.random() * 0.3 - 0.15;
        }

        update() {
            this.y += this.speed;
            this.x += this.wind;

            if (this.y > height) {
                this.y = 0;
                this.x = Math.random() * width;
            }

            if (this.x > width) this.x = 0;
            if (this.x < 0) this.x = width;
        }

        draw() {
            ctx.fillStyle = "rgba(255,255,255,0.8)";
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    for (let i = 0; i < numFlakes; i++) {
        flakes.push(new Snowflake());
    }

    let running = true;

    function animate() {
        if (!running) return;

        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < flakes.length; i++) {
            flakes[i].update();
            flakes[i].draw();
        }

        requestAnimationFrame(animate);
    }

    animate();

    // resize optimizado (MUY IMPORTANTE)
    let resizeTimeout;

    window.addEventListener("resize", () => {
        clearTimeout(resizeTimeout);

        resizeTimeout = setTimeout(() => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }, 150);
    });

    // opcional: parar  liberar CPU
    window.stopSnow = () => {
        running = false;
        ctx.clearRect(0, 0, width, height); // Limpia los cop
    };
    
    // reanudar animación
    window.startSnow = () => {
        if (!running) {
            running = true;
            animate();
        }
    };
}

window.addEventListener("load", nevar);



function propiedadesNavegador() {



    document.getElementById("codigoNavegador").textContent = navigator.userAgent;
    document.getElementById("plataforma").textContent = navigator.platform;
    document.getElementById("cookiesHabilitadas").textContent = navigator.cookieEnabled ? "Sí" : "No";

    fechas = new Date();
    hora = fechas.getHours() + ":" + fechas.getMinutes() + ":" + fechas.getSeconds();
    console.log(fechas);
    hoy = fechas.getDate() + "/" + (fechas.getMonth() + 1) + "/" + fechas.getFullYear();
    console.log(hoy);
    document.getElementById("fechaActual").textContent = hoy;
    document.getElementById("horaActual").textContent = hora;
}



// cierra la ventana de la pagina
function salir(){
     window.close();
}







   






