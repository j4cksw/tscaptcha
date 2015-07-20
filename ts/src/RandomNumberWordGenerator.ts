class RandomNumberWordGenerator implements OperandGenerator{
    generate(){
        var answers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        //return answers[super.generate()];
        return new CaptchaOperand(0, 'x');
    }
}
