/// <reference path='Randomizer.ts' />
/// <reference path='CaptchaOperand.ts' />

class RandomNumericGenerator {
    randomizer:Randomizer

    generate(){
        var randomized = this.randomizer.next();
        return new CaptchaOperand(randomized, randomized.toString());
    }

    setRandomizer(randomizer:Randomizer){
        this.randomizer = randomizer;
    }
}
