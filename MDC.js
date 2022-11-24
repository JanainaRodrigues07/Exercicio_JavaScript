function calcularMDC(valor1, valor2) {

    var resto;

    do {
        resto = valor1 % valor2;
        valor1 = valor2;
        valor2 = resto; 

    } while (resto != 0);
    return valor1;   
};

var resultado = calcularMDC(18, 60);
        
console.log("MDC = " + resultado);
