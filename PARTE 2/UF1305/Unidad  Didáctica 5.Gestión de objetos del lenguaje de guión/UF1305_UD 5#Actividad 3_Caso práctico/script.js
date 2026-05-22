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


function introducirCadena(){

  

  // Pedir cadena al usuario
  let cadena = prompt("Introduce una cadena de texto:");

  // Comprobar si el usuario canceló
  if(cadena === null){
      return;
  }

  // Obtener datos
  // numero de caracteres de la cadena introducida por el usuario
  let longitud = cadena.length;
  let primeraLetra = cadena.charAt(0);

  //cadena pasada a minusculas
  let minusculas = cadena.toLowerCase();
  // cadena pasada a mayusculas
  let mayusculas = cadena.toUpperCase();
  // subcadena que va de la primera a la tercera
  let subcadena = cadena.substring(0,3);

  document.getElementById("resultado").innerHTML = `
  <p><strong>Cadena introducida:</strong> ${cadena}</p>
  <p><strong>Longitud:</strong> ${longitud}</p>
  <p><strong>Primer carácter:</strong> ${primeraLetra}</p>
  <p><strong>En minúsculas:</strong> ${minusculas}</p>
  <p><strong>En mayúsculas:</strong> ${mayusculas}</p>
  <p><strong>Subcadena (1ª a 3ª letra):</strong> ${subcadena}</p>
`;


}




   






