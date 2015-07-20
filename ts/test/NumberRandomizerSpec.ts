/// <reference path='../../ts/src/NumberRandomizer.ts' />

describe('NumberRandomizer', () => {
    it('should return random number between 0 - 9', () => {
        var numberRandomizer = new NumberRandomizer();

        var allowedNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        expect(allowedNumbers.indexOf(numberRandomizer.next())).toBeGreaterThan(-1)
        expect(numberRandomizer.next()).toBeLessThan(10)
    })

    it('should evaluate Math.random', () => {
        spyOn(Math, 'random').and.callThrough()

        var numberRandomizer = new NumberRandomizer()
        numberRandomizer.next()

        expect(Math.random).toHaveBeenCalled()
    })
})
