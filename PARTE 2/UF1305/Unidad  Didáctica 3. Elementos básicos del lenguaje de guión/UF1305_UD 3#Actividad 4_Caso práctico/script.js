"use strict";


// Simulador de Loteria - Script Principal
// Este script contiene la logica principal del simulador de loteria, incluyendo la generacion de numeros aleatorios, la validacion de entradas,
//  la comparacion de numeros para determinar premios, y la actualizacion visual de los boletos y la tarjeta de resultado.
// El simulador permite a los usuarios generar un numero aleatorio de 5 cifras, introducir un numero premiado y un numero jugado, y ver el resultado del premio obtenido
//  segun las reglas establecidas. El script tambien maneja la reproduccion de un soundtrack tematico en respuesta a la interaccion del usuario con la pagina.
// Desarrollado por Alfonso e inteligencias Suprahumanas para el curso de Desarrollo Web, con el objetivo de proporcionar una experiencia interactiva y educativa
//  sobre el funcionamiento de un sistema de loteria, permitiendo a los usuarios generar numeros aleatorios, introducir numeros jugados y premiados, y 
// ver los resultados de manera visual y clara, sin ninguna implicacion real en terminos de premios o transacciones.
// Aqui se define una constante DIGIT_COUNT para establecer la cantidad de cifras que deben tener los numeros de loteria, y una constante EMPTY_NUMBER para representar 
// un numero vacio con guiones.


const DIGIT_COUNT = 5;
const EMPTY_NUMBER = "-----";

let lastGeneratedNumber = "";

// Genera un numero aleatorio de 5 cifras, formateado con ceros a la izquierda si es necesario.
// Ejemplo: "04237", "00005", "98765" ya que el numero se genera entre 0 y 99999.
// El numero se devuelve como string para mantener los ceros a la izquierda.
// El formato del numero se asegura con padStart para que siempre tenga 5 caracteres, rellenando con "0" a la izquierda si el numero generado tiene menos de 5 cifras.

function generateRandomNumber() {
    return Math.floor(Math.random() * 100000).toString().padStart(DIGIT_COUNT, "0");
}

function isValidLotteryNumber(value) {
    return /^\d{5}$/.test(value);
}

// Solicita al usuario que introduzca un numero de loteria valido (5 cifras numericas).
// Si el usuario cancela el prompt, se devuelve null. Si el usuario introduce un valor no valido, se muestra una alerta y se vuelve a solicitar el numero.
// El valor introducido se normaliza eliminando espacios al principio y al final antes de validar su formato.


function askForLotteryNumber(message, defaultValue = "") {
    while (true) {
        const value = window.prompt(message, defaultValue);

        if (value === null) {
            return null;
        }

        const normalizedValue = value.trim();

        if (isValidLotteryNumber(normalizedValue)) {
            return normalizedValue;
        }

        window.alert("Debes introducir exactamente 5 cifras numericas.");
    }
}
// Cuenta cuantas cifras coinciden al final de ambos numeros, empezando por la ultima cifra (unidad) y comparando hacia la izquierda (decenas, centenas, etc).
// El conteo se detiene en cuanto se encuentra una cifra que no coincide o se han comparado todas las cifras. El resultado es un numero entre 0 y 5 que indica cuantas cifras coinciden al final de ambos numeros.

function countTrailingMatches(winningNumber, playedNumber) {
    let matches = 0;

    for (let index = DIGIT_COUNT - 1; index >= 0; index -= 1) {
        if (winningNumber[index] !== playedNumber[index]) {
            break;
        }

        matches += 1;
    }

    return matches;
}
// Determina el resultado del premio comparando el numero premiado con el numero jugado, aplicando las reglas de premios establecidas.
// El resultado se devuelve como un objeto que contiene la cantidad del premio, el titulo descriptivo del premio, una descripcion detallada
//  del resultado, el tono para mostrar el resultado (jackpot, win o lose) y un array con los indices de las cifras que coinciden para resaltar en los boletos.

function getPrizeResult(winningNumber, playedNumber) {
    const trailingMatches = countTrailingMatches(winningNumber, playedNumber);

    if (winningNumber === playedNumber) {
        return {
            amount: 5000,
            title: "Premio de 5000 euros",
            description: "Has acertado el numero premiado completo.",
            tone: "jackpot",
            matchedIndexes: [0, 1, 2, 3, 4]
        };
    }

    if (trailingMatches >= 4) {
        return {
            amount: 500,
            title: "Premio de 500 euros",
            description: "Coinciden las 4 ultimas cifras del numero jugado.",
            tone: "win",
            matchedIndexes: [1, 2, 3, 4]
        };
    }

    if (trailingMatches >= 3) {
        return {
            amount: 50,
            title: "Premio de 50 euros",
            description: "Coinciden las 3 ultimas cifras del numero jugado.",
            tone: "win",
            matchedIndexes: [2, 3, 4]
        };
    }

    if (trailingMatches >= 2) {
        return {
            amount: 5,
            title: "Premio de 5 euros",
            description: "Coinciden las 2 ultimas cifras del numero jugado.",
            tone: "win",
            matchedIndexes: [3, 4]
        };
    }

    if (winningNumber[0] === playedNumber[0] || winningNumber[4] === playedNumber[4]) {
        const matchedIndexes = [];

        if (winningNumber[0] === playedNumber[0]) {
            matchedIndexes.push(0);
        }

        if (winningNumber[4] === playedNumber[4]) {
            matchedIndexes.push(4);
        }

        return {
            amount: 1,
            title: "Premio de 1 euro",
            description: "El numero empieza y/o termina por la misma cifra.",
            tone: "win",
            matchedIndexes
        };
    }

    return {
        amount: 0,
        title: "No premiado",
        description: "No coincide ni el inicio ni las terminaciones premiadas.",
        tone: "lose",
        matchedIndexes: []
    };
}
// Pinta un boleto con un numero dado, colocando cada cifra en su posicion correspondiente y rellenando con guiones las posiciones sin cifra.
// Si se proporcionan indices de cifras que coinciden, se añade una clase "match" a esos elementos para resaltarlos visualmente.
// El contenedor del boleto se espera que tenga elementos con la clase "digit" para colocar cada cifra, y se asume que el numero proporcionado tiene
//  5 caracteres (cifras o guiones) para llenar esas posiciones.


function paintTicket(container, number, matchedIndexes = []) {
    const digits = container.querySelectorAll(".digit");

    digits.forEach((digitElement, index) => {
        digitElement.textContent = number[index] ?? "-";
        digitElement.classList.toggle("match", matchedIndexes.includes(index));
    });
}

function paintResultCard(result, winningNumber, playedNumber) {
    const resultCard = document.getElementById("resultCard");
    const resultTitle = document.getElementById("resultTitle");
    const resultDescription = document.getElementById("resultDescription");

    resultCard.classList.remove("result-idle", "result-win", "result-jackpot", "result-lose");
    resultCard.classList.add(`result-${result.tone}`);

    resultTitle.textContent = result.title;
    resultDescription.textContent = `${result.description} Numero premiado: ${winningNumber}. Numero jugado: ${playedNumber}.`;
}


// Revela la seccion del soundtrack quitando la clase que la oculta y actualizando el atributo aria-hidden para mejorar la accesibilidad.
//  Esta funcion se llama en respuesta a la primera interaccion del usuario con la pagina (click, tecla, toque) para cumplir con las politicas
//  de reproduccion de audio de los navegadores, que requieren una interaccion previa del usuario para permitir la reproduccion de audio.
// Esta tonteria es necesaria para evitar que el soundtrack se reproduzca automaticamente sin el consentimiento del usuario, lo cual podria resultar molesto o intrusivo.
//  Al revelar el soundtrack solo despues de la primera interaccion, se asegura que el audio se reproduzca en un contexto donde el usuario ya ha mostrado interes en
//  interactuar con la pagina, mejorando la experiencia de usuario y cumpliendo con las politicas de los navegadores.
// La funcion tambien se encarga de reproducir el soundtrack en cuanto se revela, para que el audio comience a sonar inmediatamente despues de la interaccion del usuario.
// La inclusion de la reproduccion del soundtrack dentro de esta funcion garantiza que el audio solo se reproduzca despues de que el usuario haya interactuado con la pagina,
//  evitando reproducciones no deseadas y mejorando la experiencia de usuario.
// La funcion se asegura de que el soundtrack solo se revele y reproduzca una vez, eliminando los event listeners de interaccion despues de la primera ejecucion.
// En resumen, esta funcion es esencial para manejar la reproduccion del soundtrack de manera responsable y respetuosa con el usuario, cumpliendo con las politicas de los navegadores
//  y mejorando la experiencia de usuario al evitar reproducciones no deseadas.
// La funcion se llama setupSoundtrackReveal para indicar que se encarga de configurar el mecanismo de revelacion del soundtrack,
//  incluyendo la adicion de los event listeners necesarios para detectar la primera interaccion del usuario y ejecutar la revelacion y 
// reproduccion del soundtrack en respuesta a esa interaccion.
// El nombre de la funcion refleja su responsabilidad principal, que es configurar el proceso de revelacion del soundtrack en respuesta a la interaccion del usuario.
// El tema musical ha sido creado con inteligencia atificial utilizando la plataforma Suno AI, que permite generar musica personalizada a partir de descripciones textuales, 
// lo que ha facilitado la creacion de un soundtrack unico y adaptado al tema del simulador de loteria.

function revealSoundtrack() {
    const soundtrackSection = document.getElementById("soundtrackSection");

    if (!soundtrackSection || !soundtrackSection.classList.contains("soundtrack-hidden")) {
        return;
    }

    soundtrackSection.classList.remove("soundtrack-hidden");
    soundtrackSection.setAttribute("aria-hidden", "false");
}

function playSoundtrack() {
    const soundtrackPlayer = document.getElementById("soundtrackPlayer");

    if (!soundtrackPlayer) {
        return;
    }

    soundtrackPlayer.muted = false;
    soundtrackPlayer.volume = 1;

    if (soundtrackPlayer.paused) {
        soundtrackPlayer.currentTime = 0;
    }

    if (soundtrackPlayer.readyState === 0) {
        soundtrackPlayer.load();
    }

    const playPromise = soundtrackPlayer.play();

    if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
    }
}

function setupSoundtrackReveal() {
    const interactionEvents = ["pointerdown", "keydown", "touchstart"];

    const handleFirstInteraction = () => {
        revealSoundtrack();
        playSoundtrack();

        interactionEvents.forEach((eventName) => {
            window.removeEventListener(eventName, handleFirstInteraction, true);
        });
    };

    interactionEvents.forEach((eventName) => {
        window.addEventListener(eventName, handleFirstInteraction, true);
    });
}

function handleGenerateNumber(showAlert = true) {
    const generatedNumber = generateRandomNumber();
    const generatedNumberDisplay = document.getElementById("generatedNumberDisplay");
    const generatedMessage = document.getElementById("generatedMessage");
    const winningTicket = document.getElementById("winningTicket");
    const playedTicket = document.getElementById("playedTicket");
    const resultCard = document.getElementById("resultCard");
    const resultTitle = document.getElementById("resultTitle");
    const resultDescription = document.getElementById("resultDescription");

    lastGeneratedNumber = generatedNumber;

    paintTicket(generatedNumberDisplay, generatedNumber);
    paintTicket(winningTicket, generatedNumber);
    paintTicket(playedTicket, generatedNumber);

    resultCard.classList.remove("result-win", "result-jackpot", "result-lose");
    resultCard.classList.add("result-idle");
    resultTitle.textContent = "Numero generado en los boletos";
    resultDescription.textContent = `El ultimo numero aleatorio (${generatedNumber}) se ha colocado en los rectangulos de ambos boletos.`;
    generatedMessage.textContent = `Ultimo numero generado: ${generatedNumber}`;

    if (showAlert) {
        window.alert(`Numero aleatorio generado: ${generatedNumber}`);
    }
}
// Gestiona el proceso de comprobacion del numero jugado contra el numero premiado, incluyendo la solicitud de ambos numeros al usuario,
//  la obtencion del resultado del premio, la actualizacion visual de los boletos y la tarjeta de resultado, y la muestra de una alerta 
// con el resumen del resultado. La funcion se encarga de manejar todas las interacciones necesarias para realizar la comprobacion completa
//  del numero jugado contra el numero premiado, proporcionando una experiencia de usuario fluida y completa.
// en ninguna parte se generea el numero premiado, ya que se asume que el usuario introducira el numero generado previamente como numero premiado para realizar la comprobacion.
// La funcion se asegura de que el usuario introduzca numeros validos para el numero premiado y el numero jugado, mostrando alertas y volviendo a solicitar los numeros
//  en caso de entradas no validas o cancelaciones.
// En caso de que el usuario cancele la introduccion de alguno de los numeros, la funcion se detiene sin realizar ninguna comprobacion ni mostrar resultados,
//  permitiendo al usuario cancelar el proceso de comprobacion si lo desea.
// La funcion tambien se encarga de actualizar visualmente los boletos para resaltar las cifras que coinciden entre el numero premiado y el numero jugado,
//  asi como de actualizar la tarjeta de resultado con la informacion del premio obtenido.
// El resultado del premio se muestra tanto en la tarjeta de resultado como en una alerta resumen, proporcionando al usuario una retroalimentacion clara 
// y completa sobre el resultado de su numero jugado en comparacion con el numero premiado.
// La funcion se llama handleCheckNumber para indicar que se encarga de manejar el proceso de comprobacion del numero jugado contra el numero premiado,
//  incluyendo la gestion de las interacciones con el usuario, la obtencion del resultado del premio y la actualizacion visual de los elementos relacionados con el resultado.
// El usuario en ningun caso podra cobrar el premio, ya que este simulador es solo una representacion visual y no tiene ninguna conexion con ningun sistema de loteria real
//  ni capacidad de realizar transacciones monetarias. El objetivo del simulador es proporcionar una experiencia interactiva y educativa sobre el funcionamiento de un 
// sistema de loteria, permitiendo a los usuarios generar numeros aleatorios, introducir numeros jugados y premiados, y ver los resultados de manera visual y clara,
//  sin ninguna implicacion real en terminos de premios o transacciones.


function handleCheckNumber() {
    const winningNumber = askForLotteryNumber(
        "Introduce el numero premiado (5 cifras).",
        lastGeneratedNumber
    );

    if (winningNumber === null) {
        return;
    }

    const playedNumber = askForLotteryNumber("Introduce el numero jugado (5 cifras).");

    if (playedNumber === null) {
        return;
    }

    const result = getPrizeResult(winningNumber, playedNumber);
    const winningTicket = document.getElementById("winningTicket");
    const playedTicket = document.getElementById("playedTicket");

    paintTicket(winningTicket, winningNumber, result.matchedIndexes);
    paintTicket(playedTicket, playedNumber, result.matchedIndexes);
    paintResultCard(result, winningNumber, playedNumber);

    window.alert(
        `Numero premiado: ${winningNumber}\n` +
        `Numero jugado: ${playedNumber}\n` +
        `Resultado: ${result.title}`
    );
}
// Inicializa el simulador configurando los event listeners para los botones y pintando los boletos con numeros vacios al cargar la pagina.
//  Tambien configura el mecanismo de revelacion del soundtrack para que se revele y reproduzca en respuesta a la primera interaccion del 
// usuario con la pagina, cumpliendo con las politicas de reproduccion de audio de los navegadores y mejorando la experiencia de usuario.

function initSimulator() {
    paintTicket(document.getElementById("generatedNumberDisplay"), EMPTY_NUMBER);
    paintTicket(document.getElementById("winningTicket"), EMPTY_NUMBER);
    paintTicket(document.getElementById("playedTicket"), EMPTY_NUMBER);

    document.getElementById("generateButton").addEventListener("click", handleGenerateNumber);
    document.getElementById("checkButton").addEventListener("click", handleCheckNumber);
    setupSoundtrackReveal();
}

window.addEventListener("DOMContentLoaded", initSimulator);
