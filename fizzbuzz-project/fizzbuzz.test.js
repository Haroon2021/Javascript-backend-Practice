const fizzbuzz = require('./fizzbuzz.js')

describe('fizzbuzz', () => {
    it('fizzbuzz 3', () => {
        expect(fizzbuzz(3)).toBe('Fizz')
    });
    it('fizzbuzz 5', () => {
        expect(fizzbuzz(5)).toBe('Buzz')
    });
});