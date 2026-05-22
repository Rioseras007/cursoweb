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
