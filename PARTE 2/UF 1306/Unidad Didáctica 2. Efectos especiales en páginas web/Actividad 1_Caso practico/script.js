// 

// Cuando el documento esté cargado
window.addEventListener('DOMContentLoaded', function () {
  // Seleccionamos todas las imágenes que queremos que cambien
  var imagenes = document.querySelectorAll('img.swap');

  imagenes.forEach(function (img) {
    // Al pasar el ratón: cambiar a la versión en color
    img.addEventListener('mouseover', function () {
      var rutaColor = img.getAttribute('data-color');
      img.setAttribute('src', rutaColor);
    });

    // Al quitar el ratón: volver a la versión sombreada
    img.addEventListener('mouseout', function () {
      var rutaSombreada = img.getAttribute('data-sombreada');
      img.setAttribute('src', rutaSombreada);
    });
  });
});



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






// Cierra la ventana de la página
function salir(){
     window.close();
}









   






