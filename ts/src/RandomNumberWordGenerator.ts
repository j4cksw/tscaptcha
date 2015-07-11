class RandomNumberWordGenerator extends RandomNumericGenerator{
    generate(){
        var answers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        return answers[super.generate()];
    }
}
