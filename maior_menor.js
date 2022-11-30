function valorMenor(x, y, z) {
    let menor;

        if (x < y) {
            menor = x;
        } else {
            menor = y
        } x = menor;

        if (x < z) {
            menor = x;
        } else {
            menor = z
        }

    return menor;
};
    

function valorMaior(x, y, z) {
    let maior;

    if (x > y) {
        maior = x;
    } else {
        maior = y
    } x = maior;

    if (x > z) {
        maior = x;
    } else {
        maior = z
    }

    return maior;
};

module.exports = { valorMenor, valorMaior };







