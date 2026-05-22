// 

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





// pregunta 2 formulario utilizando jQuery

// Función global validarFormulario que se ejecuta al enviar
function validarFormulario(event) {
    event.preventDefault(); // Evitamos el envío por defecto

    // Referencias de jQuery
    const $nombre = $('#nombre');
    const $edad = $('#edad');
    const $email = $('#email');
    const $sexo = $('#sexo');
    const $mensajeTxt = $('#mensaje_txt');
    const $mensajeDiv = $('#mensaje');
    const $password=$('#password');
    const $password2=$('#password_2');

    // Limpiamos mensajes previos
    $mensajeDiv.text('').css('color', '');

    const nombreVal = $nombre.val().trim();
    const edadVal = $edad.val().trim();
    const emailVal = $email.val().trim();
    const sexoVal = $sexo.val();
    const mensajeVal = $mensajeTxt.val();

    // c. Validar que el campo “nombre” no esté vacío.
    if (nombreVal === '') {
        $mensajeDiv.text("El campo ‘nombre’ es obligatorio").css('color', 'red');
        $nombre.focus();
        return false;
    }

    // d. Validar que el campo “nombre” sólo acepte caracteres de letras y espacios en blanco.
    const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
    if (!regexNombre.test(nombreVal)) {
        $mensajeDiv.text("El campo nombre sólo acepta letras y espacios en blanco").css('color', 'red');
        $nombre.focus();
        return false;
    }

    // e. Validar que el campo edad no está vacío y contiene números entre 18 y 120.
    if (edadVal === '') {
        $mensajeDiv.text("El campo edad es obligatorio").css('color', 'red');
        $edad.focus();
        return false;
    }
    const edadNum = parseInt(edadVal, 10);
    if (isNaN(edadNum) || edadNum < 18 || edadNum > 120) {
        $mensajeDiv.text("La edad debe ser un número entero entre 18 y 120").css('color', 'red');
        $edad.focus();
        return false;
    }

    // f. Validar el campo email para que no esté vacío y sea un email válido.
    if (emailVal === '') {
        $mensajeDiv.text("El campo email es obligatorio").css('color', 'red');
        $email.focus();
        return false;
    }
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regexEmail.test(emailVal)) {
        $mensajeDiv.text("Debe ingresar un email válido (ejemplo: nombre@dominio.com)").css('color', 'red');
        $email.focus();
        return false;
    }

    // e. Validar el campo sexo para que sea obligatorio realizar una selección.
    if (sexoVal === '') {
        $mensajeDiv.text("El campo sexo es obligatorio").css('color', 'red');
        $sexo.focus();
        return false;
    }

    // f. Validar el campo mensaje para que no pueda contener más de 255 caracteres.
    if (mensajeVal.length > 255) {
        $mensajeDiv.text("El mensaje no puede contener más de 255 caracteres").css('color', 'red');
        $mensajeTxt.focus();
        return false;
    }

    // c. Validar longitud password entre 6 y 10 caracteres y que el usuario escriba el password por segunda vez y verificar que ha escrito lo mismo
    const passwordVal = $password.val();
    const password2Val = $password2.val();

    if (passwordVal === '') {
        $mensajeDiv.text("El campo password es obligatorio").css('color', 'red');
        $password.focus();
        return false;
    }

    if (passwordVal.length < 6 || passwordVal.length > 10) {
        $mensajeDiv.text("El password debe tener entre 6 y 10 caracteres").css('color', 'red');
        $password.focus();
        return false;
    }

    if (password2Val === '') {
        $mensajeDiv.text("Debe repetir el password").css('color', 'red');
        $password2.focus();
        return false;
    }

    if (passwordVal !== password2Val) {
        $mensajeDiv.text("Los passwords no coinciden").css('color', 'red');
        $password2.focus();
        return false;
    }

    // Si todas las validaciones son correctas, mostramos "Formulario enviado"
    $mensajeDiv.text("Formulario enviado");

    // Aplicamos color según el sexo seleccionado para dar dinamismo
    if (sexoVal === 'Hombre') {
        $mensajeDiv.css('color', 'blue');
    } else if (sexoVal === 'Mujer') {
        $mensajeDiv.css('color', 'pink');
    } else {
        $mensajeDiv.css('color', '#cccc00'); // Amarillo oscuro
    }

    return true;
}

$(document).ready(function() {
    const $nombre = $('#nombre');
    const $lblNombre = $('#lblNombre');
    const $edad = $('#edad');
    const $sexo = $('#sexo');
    const $mensajeDiv = $('#mensaje');
    const $formulario = $('#formulario');

    // Resaltar etiqueta al obtener foco
    $nombre.on('focus', function() {
        $lblNombre.addClass('highlight');
    });

    $nombre.on('blur', function() {
        $lblNombre.removeClass('highlight');
    });

    // Evento: cuando el usuario escribe su nombre
    $nombre.on('input', function() {
        const val = $nombre.val();
        if (val) {
            $mensajeDiv.text(`Hola, ${val}`).css('color', '');
        } else {
            $mensajeDiv.text('');
        }
    });

    // Evento: validar edad dinámicamente
    $edad.on('input', function() {
        const edad = parseInt($edad.val(), 10);
        if (isNaN(edad) || edad < 0 || edad > 120) {
            $mensajeDiv.text("La edad debe ser un número entre 0 y 120.").css('color', 'red');
        } else {
            $mensajeDiv.text('').css('color', '');
        }
    });

    // Evento: cambio de sexo
    $sexo.on('change', function() {
        const sexoVal = $sexo.val();
        if (sexoVal) {
            $mensajeDiv.text(`Has seleccionado: ${sexoVal}`).css('color', '');
        } else {
            $mensajeDiv.text('');
        }
    });

    // Asignar evento submit
    $formulario.on('submit', function(e) {
        validarFormulario(e);
    });

    // Evento para el botón de borrar/reset
    $('#btn-borrar').on('click', function() {
        $mensajeDiv.text('').css('color', '');
        $lblNombre.removeClass('highlight');
    });
});




   






