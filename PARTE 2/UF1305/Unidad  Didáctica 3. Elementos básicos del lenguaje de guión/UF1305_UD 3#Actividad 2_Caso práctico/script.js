document.addEventListener('DOMContentLoaded', function () {
   
    
    // --- RESOLUCIÓN DEL EJERCICIO ---
    
    // 1. Declaración de variables
    let nombre1, edad1, altura1;
    let nombre2, edad2, altura2;
    let promedioEdad, promedioAltura;

    // 2. Asignación de valores en líneas separadas
    nombre1 = "Pepe";
    edad1 = 40;
    altura1 = 1.60;

    nombre2 = "Ana";
    edad2 = 30;
    altura2 = 1.70;

    // 3. Cálculos
    promedioEdad = (edad1 + edad2) / 2;
    promedioAltura = (altura1 + altura2) / 2;

    // 4. Mostrar resultados en el DOM
    document.getElementById("persona1").textContent = `${nombre1}, ${edad1} años, ${altura1.toFixed(2)} m`;
    document.getElementById("persona2").textContent = `${nombre2}, ${edad2} años, ${altura2.toFixed(2)} m`;
    
    document.getElementById("resultado-final").innerHTML = `
        <b>Promedio de edad:</b> ${promedioEdad} años<br>
        <b>Promedio de altura:</b> ${promedioAltura.toFixed(2)} m
    `;
});