class RandomNumberWordGenerator implements OperandGenerator{
    randomizer:Randomizer

    generate(){
        var answers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        var randomized = this.randomizer.next()
        return new CaptchaOperand(randomized, answers[randomized]);
    }

    setRandomizer(randomizer:Randomizer){
        this.randomizer = randomizer;
    }

    static createWithDefaultRandomizer() {
        var instance = new RandomNumberWordGenerator()
        instance.setRandomizer(new NumberRandomizer())
        return instance
    }
}
