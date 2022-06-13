const contenedor = document.getElementById("test");
const botonRes = document.getElementById("botonAbajo");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
    {
        pregunta: "1. ¿Cuál es el lenguaje que se usa para crear páginas web?",
        respuestas: {
            a: "JAVA <br>",
            b: "HTML-5 <br>",
            c: "PERL <br>",
        },
        respuestaCorrecta: "b",
    },
    {
        pregunta: "2. ¿Qué es un lenguaje de programación?",
        respuestas: {
            a: "Lenguaje que puede ser utilizado para controlar el comportamiento de algo. <br>",
            b: "Lenguaje que se utiliza para interactuar con los usuarios. <br>",
            c: "Lenguaje artificial que puede ser utilizado para controlar el comportamiento de una máquina. <br>",
        },
        respuestaCorrecta: "c",
    },
    {
        pregunta: "3. ¿A qué se le llama pseudocódigo?",
        respuestas: {
            a: "Es un lenguaje de programación. <br>",
            b: "No es un término utilizado en programación. <br>",
            c: "Es una serie de normas léxicas y gramaticales parecidas a la mayoría de los lenguajes de programación. <br>",
        },
        respuestaCorrecta: "c",
    },
    {
        pregunta: "4. ¿Cuales son los lenguajes de programación más comunes?",
        respuestas: {
            a: "C, C++, PASCAL <br>",
            b: "JAVA, JavaScript, HTML-5 <br>",
            c: "PYTHON, PERL, JavaScript <br>",
        },
        respuestaCorrecta: "a",
    },
    {
        pregunta: "5. ¿Diferencia entre Alto Nivel y Bajo Nivel?",
        respuestas: {
            a: "Bajo Nivel: permiten al programador olvidarse por completo del funcionamiento interno de la máquina. Alto Nivel: prácticamente diseñados a medida del hardware. <br>",
            b: "Bajo Nivel: lenguaje independiente de la arquitectura del ordenador. Alto Nivel: lenguaje de máquina. <br>",
            c: "Bajo Nivel: totalmente dependiente de la máquina. Alto Nivel: son aquellos que se encuentran más cercanos al lenguaje natural que al lenguaje de máquina. <br>",
        },
        respuestaCorrecta: "c",
    },
    {
        pregunta: "6. ¿Qué es un Algoritmo?",
        respuestas: {
            a: "Conjunto desordenado de operaciones para encontrar la solución a un problema. <br>",
            b: "Conjunto de sentencias para resolver un problema. <br>",
            c: "Conjunto ordenado y finito de operaciones que permiten hallar la solución de un problema. <br>",
        },
        respuestaCorrecta: "c",
    },
    {
        pregunta: "7. ¿Qué significa CSS?",
        respuestas: {
            a: "Colorful Style Sheets. <br>",
            b: "Cascading Style Sheets. <br> ",
            c: "Computer Style Sheets. <br>",
        },
        respuestaCorrecta: "b",
    },
    {
        pregunta: "8. ¿Por qué es tan conocido JAVA?",
        respuestas: {
            a: "Porque es simple. <br>",
            b: "Porque tiene una filosofía única: 'se escribe una vez y ejecuta en cualquier lugar'. <br>",
            c: "Porque tiene pocos tipos de datos y pocas clases en sus paquetes. <br>",
        },
        respuestaCorrecta: "b",
    },
    {
        pregunta: "9. ¿Para qué se utiliza JavaScript?",
        respuestas: {
            a: "Es el lenguaje de programación que debes usar para añadir características interactivas a tu sitio web. <br>",
            b: "Es el lenguaje de programación que debes usar para añadir estilo a tu sitio web. <br>",
            c: "Lenguaje para escribir un código de una página web. <br>",
        },
        respuestaCorrecta: "a",
    },
    {
        pregunta: "10. ¿Qué tipo de lenguaje es Python?",
        respuestas: {
            a: "Es un lenguaje difícil de escribir y comprender. <br>",
            b: "Es un lenguaje sencillo de leer y escribir debido a su alta similitud con el lenguaje humano. <br>",
            c: "Lenguaje poco integrado en el entorno laboral. <br>",
        },
        respuestaCorrecta: "b",
    },
];

function mostrarTest() {
    const preguntasYrespuestas = [];

    preguntas.forEach((preguntaActual, numeroDePregunta) => {
        const respuestas = [];

        for (letraRespuesta in preguntaActual.respuestas) {
            respuestas.push(
                `<label>
                  <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
                  ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
              </label>`
            );
        }

        preguntasYrespuestas.push(
            `<div class="cuestion">${preguntaActual.pregunta}</div>
          <div class="respuestas"> ${respuestas.join("")} </div>
          `
        );
    });

    contenedor.innerHTML = preguntasYrespuestas.join("");
}

mostrarTest();

function mostrarResultado() {
    const respuestas = contenedor.querySelectorAll(".respuestas");
    let respuestasCorrectas = 0;

    preguntas.forEach((preguntaActual, numeroDePregunta) => {
        const todasLasRespuestas = respuestas[numeroDePregunta];
        const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
        const respuestaElegida = (
            todasLasRespuestas.querySelector(checkboxRespuestas) || {}
        ).value;

        if (respuestaElegida === preguntaActual.respuestaCorrecta) {
            respuestasCorrectas++;

            respuestas[numeroDePregunta].style.color = "blue";
        } else {
            respuestas[numeroDePregunta].style.color = "red";
        }
    });

    resultadoTest.innerHTML =
        "Usted ha acertado " +
        respuestasCorrectas +
        " preguntas de un total de " +
        preguntas.length;
}

botonRes.addEventListener("click", mostrarResultado);
