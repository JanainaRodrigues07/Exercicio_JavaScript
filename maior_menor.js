const numeros = [2, 6, 1, 4, 9];
let a = numeros[0];
let menor;
let maior;

for (let index = 0; index < numeros.length; index++) {
    let b = numeros[index];

    if (a < b) {
        menor = a;
    } else {
        menor = b
    } a = menor;

};

var resultado = a;

console.log("Menor índice = " + resultado);


for (let index = 0; index < numeros.length; index++) {
    let b = numeros[index];

    if (a > b) {
        maior = a;
    } else {
        maior = b
    } a = maior;

};

var resultado = a;

console.log("Maior índice = " + resultado);










