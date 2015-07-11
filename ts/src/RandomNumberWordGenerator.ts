class RandomNumberWordGenerator {
    generate(){
        var answers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
        return answers[new RandomNumericGenerator().generate()];
    }
}
