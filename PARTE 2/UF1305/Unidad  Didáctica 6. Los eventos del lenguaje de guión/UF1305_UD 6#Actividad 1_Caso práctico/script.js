// Función para mostrar las propiedades del navegador
// Esta función se ejecuta cuando se hace clic en el botón "Propiedades del navegador"
// Utiliza el objeto navigator para obtener información sobre el navegador y la plataforma
// Luego, actualiza el contenido de los elementos HTML correspondientes para mostrar esta información al usuario
// La función muestra el código del navegador, la plataforma y si las cookies están habilitadas o no
// El objeto navigator es una propiedad del objeto window que contiene información sobre el navegador del usuario



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

    alert("Valor del contador: " + contador);
}

// es escuchador de eventos de ratón  
document.getElementById("incremento").addEventListener( "click", IncrementarContador);





function cambiarFondo(color) {

    document.body.style.backgroundImage = "none"; // Quita la imagen de fondo
    document.body.style.backgroundColor = color; // asigna el color dependiendo de la etiqueca label o enlace
}

function dejarBlanco()
{
    document.body.style.backgroundImage = "none"; // Quita la imagen de fondo
    document.body.style.backgroundColor = 'white'; // Lo deja en color blanco


}

function reset() {
    // Al asignar una cadena vacía, se eliminan los estilos en línea y el navegador
    // vuelve a aplicar los estilos definidos en el archivo styles.css (la imagen original).
    document.body.style.backgroundImage = ""; 
    document.body.style.backgroundColor = "";
}


// cierra la ventana de la pagina
function salir(){
     window.close();
}


// asigna una imagen diferente de la inicial

function fondoAlt(){
     
    document.body.style.backgroundColor = "";
    document.body.style.backgroundImage = "url('img/fondoalt.jpg')";
}









   






