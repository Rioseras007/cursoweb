// Funciones utilizadas en index.html y lógica de ejercicios


function resolverEjercicios() {
    // 1a. Factorial de 6 con FOR
    let factorial = 1;
    for (let i = 1; i <= 6; i++) {
        factorial *= i;
    }
    document.getElementById('res-1a').innerText = factorial;

    // 1b. Múltiplos de 5 hasta 30 con WHILE
    let multiplos = [];
    let n = 0;
    while (n <= 30) {
        if (n % 5 === 0) {
            multiplos.push(n);
        }
        n++;
    }
    document.getElementById('res-1b').innerText = multiplos.join(', ');

    // 1c. Producto de los 10 primeros impares con DO-WHILE
    let productoImpares = 1;
    let contador = 0;
    let actual = 1;
    do {
        productoImpares *= actual;
        actual += 2;
        contador++;
    } while (contador < 10);
    document.getElementById('res-1c').innerText = productoImpares.toLocaleString();

    // 2. Operadores de desplazamiento de bits
    document.getElementById('res-2a').innerText = 30 << 3;    // 30 * 8
    document.getElementById('res-2b').innerText = 10 << 1;    // 10 * 2
    document.getElementById('res-2c').innerText = 150 >> 4;   // 150 / 16
    document.getElementById('res-2d').innerText = 100 >> 2;   // 100 / 4
}

// Funciones para cálculos personalizados
function calcularFactorialPersonalizado() {
    const input = document.getElementById('input-factorial');
    const n = parseInt(input.value);
    const resDiv = document.getElementById('res-factorial-n');

    if (isNaN(n) || n < 0) {
        alert("Por favor, introduce un número válido mayor o igual a 0.");
        return;
    }

 

    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    resDiv.innerText = factorial.toLocaleString();
}

function calcularMultiplosPersonalizado() {
    const input = document.getElementById('input-multiplos');
    const m = parseInt(input.value);
    const resDiv = document.getElementById('res-multiplos-m');

    if (isNaN(m) || m < 0) {
        alert("Por favor, introduce un número válido mayor o igual a 0.");
        return;
    }

  

    let multiplos = [];
    let i = 0;
    while (i <= m) {
        if (i % 5 === 0) {
            multiplos.push(i);
        }
        i++;
    }
    resDiv.innerText = multiplos.join(', ') || "Ninguno";
}

function calcularImparesPersonalizado() {
    const input = document.getElementById('input-impares');
    const k = parseInt(input.value);
    const resDiv = document.getElementById('res-impares-k');

    if (isNaN(k) || k < 1) {
        alert("Por favor, introduce un número de impares válido (mínimo 1).");
        return;
    }

 
    let producto = 1;
    let contador = 0;
    let actual = 1;
    do {
        producto *= actual;
        actual += 2;
        contador++;
    } while (contador < k);
    resDiv.innerText = producto.toLocaleString();
}

function reiniciarResultadosPersonalizados() {
    document.getElementById('res-factorial-n').innerText = '...';
    document.getElementById('res-multiplos-m').innerText = '...';
    document.getElementById('res-impares-k').innerText = '...';
    document.getElementById('input-factorial').value = '';
    document.getElementById('input-multiplos').value = '';
    document.getElementById('input-impares').value = '';
}

// Ejecutar al cargar la página
window.addEventListener('DOMContentLoaded', resolverEjercicios);