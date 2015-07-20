/// <reference path='Randomizer.ts' />
/// <reference path='CaptchaOperand.ts' />

class RandomNumericGenerator {
    randomizer:Randomizer

    generate(){
        //return (Math.floor(Math.random() * (9 - 1 + 1)) + 1).toString();
        var randomized = this.randomizer.next();
        return new CaptchaOperand(randomized, randomized.toString());
    }

    setRandomizer(randomizer:Randomizer){
        this.randomizer = randomizer;
    }
}
