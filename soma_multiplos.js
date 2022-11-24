let num1 = 0

for (let index = 0; index < 100; index++) {
    let num2 = index;
    
    if (num2 % 5 == 0 || num2 % 7 == 0){
        var soma = num1 + num2;
        num1 = soma;
        
    }
    
}; console.log("Soma = " + num1);