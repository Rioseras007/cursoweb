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


function dividirVentana(){

    // -------------------------------------------------------------
// Función dividirVentana()
// Al ejecutarse, abre una nueva ventana del navegador que contiene
// dos frames colocados horizontalmente. Cada frame ocupa el 50%
// del ancho disponible. La ventana se genera usando un documento
// HTML construido dinámicamente mediante document.write().
// -------------------------------------------------------------
    alert("Ni google ni  Bing permieten meter sus webs en frames de una pagina externa sin permiso" );

    // Abrimos una nueva ventana vacía
    let nueva = window.open("", "ventanaDividida", "width=800,height=600");

    // Escribimos dentro de la nueva ventana un documento HTML
    nueva.document.write(`
        <html>
        <head>
            <title>Ventana Dividida</title>
        </head>
        <frameset cols="50%,50%">
            <frame src="https://www.google.com/">
            <frame src="http://www.bing.com">
        </frameset>
       
        </html>
    `);

    nueva.document.close(); // Finaliza la escritura del documento
    // llamada a la funcion aviso
    aviso();
}


// la funcion aviso nos confirma lo que ya sabaimos desde antes de interntarlo

function aviso(){

    window.alert("Pero mi obligación era intentarlo" );


}

   






