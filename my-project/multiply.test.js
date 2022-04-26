const multiply = require('./multiply')

describe('multiply', () => {
    it('multiplies 5 and 4', () =>{
        expect(multiply(4,5)).toBe(20)
    });
    it('multiplies 3 and 2', () => {
        expect(multiply(3,2)).toBe(6)
    });
});