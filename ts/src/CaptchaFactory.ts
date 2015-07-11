/// <reference path='Captcha.ts' />
/// <reference path='OperandGenerator.ts'/>

class CaptchaFactory {
    firstOperandGenerator: OperandGenerator;
    generate(){
        this.firstOperandGenerator.generate();
        return new Captcha();
    };
    setFirstOperandGenerator(generator: OperandGenerator){
        this.firstOperandGenerator = generator;
    };
}
