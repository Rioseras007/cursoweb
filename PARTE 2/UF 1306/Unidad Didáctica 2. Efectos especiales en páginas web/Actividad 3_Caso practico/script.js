let subventana = null; // Referencia  a subwindow



// ---------- Apertura de una nueva ventana (varias permitidas) ----------
function abrirVentana() {
    const url = document.getElementById('urlInputSingle').value.trim();
    const urlFinal = url === '' ? 'https://www.google.com' : url;
    window.open(urlFinal, '_blank');
}
document.getElementById('urlInputSingle').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') abrirVentana();
});






// ---------- Apertura de URLs múltiples (con input id urlInput) ----------
function abrirURL() {
    const url = document.getElementById('urlInput').value.trim();
    const urlFinal = url === '' ? 'https://www.google.com' : url;
    window.open(urlFinal, '_blank');
}
document.getElementById('urlInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') abrirURL();
});



// ---------- Subventana (solo una instancia) ----------
// subventana variable declarada arriba

function abrirSubventana() {
    
    console.log('Intentando abrir subventana');
    if (subventana && !subventana.closed) {
        console.log('Subventana ya abierta, enfocando');
        subventana.focus();
        return;
    }
    subventana = window.open('', 'subventana', 'width=800,height=600,resizable=yes,scrollbars=yes');
    if (!subventana) {
        console.error('El navegador bloqueó la apertura de la subventana');
        return;
    }

    // declaromos la variable y en ella pasamos todo el codigo que creara la subventana incluidos estillos css y codigo js
    const subHtml = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <link rel="stylesheet" href="styles.css">
            <title>Subventana - Comunicación</title>
            <style>
                body {font-family: Arial, sans-serif; background: #f0f4ff; padding: 20px;background-color: #1caeec; margin: 0; padding: 40px;}
                .container {background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);}
                input {padding: 8px; width: 80%; margin-right: 8px; background-color: #cd1f1f;font-size:1.8rem;}
                .boton-elegante { background: linear-gradient(135deg, #4a90e2, #357ABD);  color: #fff;   padding: 12px 28px; border: none;  border-radius: 8px;  font-size: 16px; font-weight: 600; cursor: pointer;box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* Sombra suave */ transition: all 0.3s ease; /* Transiciones suaves */  outline: none; /* Quitar contorno por defecto */ }
            
    
                
            </style>


        </head>
        <body>
            <div class="container">
                <h2>Subventana</h2>
                <input type="text" id="msgInput" placeholder="Mensaje al padre" />
                <br><br>
                <button class="boton-elegante" onclick="enviarAlPadre()">Enviar al padre</button>
                <br><br>
                <button class="boton-elegante" onclick="window.close()">Cerrar</button>
            </div>
            <script>
                function enviarAlPadre() {
                    const msg = document.getElementById('msgInput').value;
                    if (window.opener && !window.opener.closed) {
                        const target = window.opener.document.getElementById('textoPadre');
                        if (target) target.value = msg;
                    }
                }
            </script>
        </body>
        </html>
    `;
    subventana.document.write(subHtml);
    subventana.document.close();
    subventana.focus();
    console.log('Subventana cargada y enfocada');
}
function cerrarSubventana() {
    if (subventana && !subventana.closed) {
        subventana.close();
        subventana = null;
    }
}



