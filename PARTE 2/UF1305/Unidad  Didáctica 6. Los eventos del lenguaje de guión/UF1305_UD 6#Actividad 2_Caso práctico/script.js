// Función para mostrar las propiedades del navegador
// Esta función se ejecuta cuando se hace clic en el botón "Propiedades del navegador"
// Utiliza el objeto navigator para obtener información sobre el navegador y la plataforma
// Luego, actualiza el contenido de los elementos HTML correspondientes para mostrar esta información al usuario
// La función muestra el código del navegador, la plataforma y si las cookies están habilitadas o no
// El objeto navigator es una propiedad del objeto window que contiene información sobre el navegador del usuario
window.onload = function() {
    alert("Página cargada");
};




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



// la variable fuera de la funcion contador para que funcione correctamente

var contador = 0;

function IncrementarContador()
{
    contador++;

   


// es escuchador de eventos de ratón  

document.getElementById("incremento").addEventListener( "click", IncrementarContador);
document.getElementById("incremento").textContent = `El numero de incrementos es: ${contador}`;

}



function cambiarFondo(color) {

    document.body.style.backgroundImage = "none"; // Quita la imagen de fondo
    document.body.style.backgroundColor = color; // asigna el color dependiendo de la etiqueca label o enlace
}





// cierra la ventana de la pagina
function salir(){
     window.close();
}





// pregunta 2 formulario

const nombreInput = document.getElementById('nombre');
const edadInput = document.getElementById('edad');
const sexoSelect = document.getElementById('sexo');
const mensajeDiv = document.getElementById('mensaje');
const formulario = document.getElementById('formulario');

// Resaltar etiqueta al obtener foco
    const inputNombre = document.getElementById("nombre");
    const labelNombre = document.getElementById("lblNombre");

    inputNombre.addEventListener("focus", function() {
      labelNombre.classList.add("highlight");
    });

    inputNombre.addEventListener("blur", function() {
      labelNombre.classList.remove("highlight");
    });


// Evento: cuando el usuario escribe su nombre
nombreInput.addEventListener('input', () => {
    mensajeDiv.textContent = `Hola, ${nombreInput.value}`;
});

// Evento: validar edad
edadInput.addEventListener('input', () => {
    const edad = parseInt(edadInput.value);
    if (edad <= 0 || isNaN(edad)) {
        mensajeDiv.textContent = "La edad debe ser un número positivo.";
    } else {
        mensajeDiv.textContent = "";
    }
});

// Evento: cambio de sexo
sexoSelect.addEventListener('change', () => {
    if (sexoSelect.value) {
        mensajeDiv.textContent = `Has seleccionado: ${sexoSelect.value}`;
    } else {
        mensajeDiv.textContent = '';
    }
});

// Evento: envío del formulario
formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita recargar la página
    const nombre = nombreInput.value.trim();
    const edad = parseInt(edadInput.value);
    const sexo = sexoSelect.value;

    if (!nombre || edad <= 0 || !sexo) {
        mensajeDiv.textContent = "Por favor, complete todos los campos correctamente.";
        mensajeDiv.style.color = 'red'; // Mensaje de error en rojo
        return;
    }

    mensajeDiv.textContent = `Registro completado: ${nombre}, ${edad} años, ${sexo}.`;

    // Cambio de color del div mensaje según la opción seleccionada al pulsar enviar
    if (sexo === 'Hombre') {
        mensajeDiv.style.color = 'blue';
    } else if (sexo === 'Mujer') {
        mensajeDiv.style.color = 'pink';
    } else {
        mensajeDiv.style.color = '#cccc00'; // Color amarillo oscuro
    }
});


function ponerRojo() {
    document.getElementById("dinamico").style.backgroundColor = "red";
}

function ponerVerde() {
    document.getElementById("dinamico").style.backgroundColor = "green";
}

// Evento al pulsar la tecla 'w' para abrir Google
document.addEventListener('keydown', function(event) {
    if (event.key === 'w' || event.key === 'W') {
        window.open("https://www.google.com", "_blank");
    }
});


   






