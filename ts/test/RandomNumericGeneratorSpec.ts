/// <reference path='../../ts/src/RandomNumericGenerator.ts' />
describe('RandomNumericGenerator', () => {
    it('should return randomized support numeric character', () => {
        var generator = new RandomNumericGenerator();
        var fakeRandomizer = jasmine.createSpyObj('FakeRandomizer', ['next']);
        generator.setRandomizer(fakeRandomizer);

        fakeRandomizer.next.and.returnValue(1);

        var result = generator.generate();
        
        expect(result.getDisplay()).toBe('1');
        expect(result.getValue()).toBe(1);
    })
})
