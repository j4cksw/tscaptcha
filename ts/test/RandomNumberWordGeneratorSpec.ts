/// <reference path='../../ts/src/RandomNumberWordGenerator.ts' />
describe('RandomNumberWordGenerator', () => {
    it('should random provided answer', () => {
        var generator = new RandomNumberWordGenerator();

        var fakeRandomizer = jasmine.createSpyObj('FakeRandomizer', ['next'])
        fakeRandomizer.next.and.returnValue(1)
        generator.setRandomizer(fakeRandomizer)
        //var answers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
        var result = generator.generate();
        //expect(answers.indexOf(generator.generate())).toBeGreaterThan(-1);
        expect(result.getDisplay()).toBe('one')
        expect(result.getValue()).toBe(1)
    })
})
