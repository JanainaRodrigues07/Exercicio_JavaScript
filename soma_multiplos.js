function multiplos(x, y) {
    let num1 = 0;

    for (let index = 0; index < 100; index++) {
        let num2 = index;

        if (num2 % x == 0 || num2 % y == 0) {
            var soma = num1 + num2;
            num1 = soma;
        }
    };

    return num1;
};

module.exports = { multiplos };