const { valorMenor, valorMaior } = require('./maior_menor')
const { calcularMDC } = require('./MDC')
const { multiplos } = require('./soma_multiplos')

describe('Funções matemáticas', () => {
    it('Encontrar menor índice', () => {
        expect(valorMenor(3, 7, 1)).toBe(1)
        
    });

    it('Encontrar maior índice', () => {
        expect(valorMaior(8, 7, 9)).toBe(9)
        
    });

    it('Encontrar MDC', () => {
        expect(calcularMDC(18,60)).toBe(6)
        
    });

    it('Somando múltiplos de dois números abaixo de 100', () => {
        expect(multiplos(5, 7)).toBe(1580)
        
    });

});