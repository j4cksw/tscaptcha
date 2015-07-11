/// <reference path='../../ts/src/RandomNumberWordGenerator.ts' />
describe('RandomNumberWordGenerator', () => {
    it('should random provided answer', () => {
        var generator = new RandomNumberWordGenerator();

        var answers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

        expect(answers.indexOf(generator.generate())).toBeGreaterThan(-1);
    })
})
