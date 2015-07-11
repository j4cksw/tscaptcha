/// <reference path='../../ts/src/RandomNumericGenerator.ts' />
describe('RandomNumericGenerator', () => {
    it('should return randomized support numeric character', () => {
        var generator = new RandomNumericGenerator();
        var answers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
        expect(answers.indexOf(generator.generate())).toBeGreaterThan(-1);
    })
})
