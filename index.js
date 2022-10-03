"use strict";

/* TODO */
let aprobados = [];
let desaprobados = [];
let promocionados = [];

function cargarNota(){
    let nota = validarNota("ingresar nota");
    if (nota >= 7) {
        aprobados.push(nota);
        promocionados.push(nota);
    } else if (nota >= 4 && nota < 7){
        aprobados.push(nota);
    } else {
        desaprobados.push(nota);
    }
}

function validarNota(msg) {
    let nota;
    do {
        nota = parseInt(prompt(msg)); 
        var notaValida = true;
        if (isNaN(nota)) {
            alert("tiene que ser valor numerico");
            notaValida = false;
        } else if (nota < 1 || nota > 10) {
            alert("tiene que estar entre 1 y 10");
            notaValida = false;
        }
    } while (notaValida == false)
    return nota;
}

function calcularPromedio(arr){
    let acumulador = 0;
    for (let i = 0; i < arr.length; i++) {
        acumulador += arr[i];
    }
    return (acumulador / arr.length).toFixed(2);
}

function verPromedios(){
    console.log(`promocionados ${promocionados.length}, promedio ${calcularPromedio(promocionados)}`);
    console.log(`aprobados ${aprobados.length}, promedio ${calcularPromedio(aprobados)}`);
    console.log(`desaprobados ${desaprobados.length}, promedio ${calcularPromedio(desaprobados)}`);
}