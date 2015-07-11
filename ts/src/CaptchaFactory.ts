/// <reference path='Captcha.ts' />
/// <reference path='OperandGenerator.ts'/>

class CaptchaFactory {
    firstOperandGenerator: OperandGenerator;
    secondOperandGenerator: OperandGenerator;
    generate(){
        var first = this.firstOperandGenerator.generate();
        var second = this.secondOperandGenerator.generate();
        return new Captcha(first, second);
    }
    setFirstOperandGenerator(generator: OperandGenerator){
        this.firstOperandGenerator = generator;
    }
    setSecondOperandGenerator(generator: OperandGenerator){
        this.secondOperandGenerator = generator;
    }
}
