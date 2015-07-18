/// <reference path='../../bower_components/DefinitelyTyped/jasmine/jasmine.d.ts' />
/// <reference path='../../ts/src/CaptchaFactory.ts' />

describe('captcha', function() {

    var captchaFactory;
    var firstOperandGenerator;
    var secondOperandGenerator;

    beforeEach(function() {
        captchaFactory = new CaptchaFactory();

        firstOperandGenerator = jasmine.createSpyObj('RandomNumericGenerator', ['generate']);
        firstOperandGenerator.generate.and.returnValue('1');
        captchaFactory.setFirstOperandGenerator(firstOperandGenerator);

        secondOperandGenerator = jasmine.createSpyObj('RandomNumberWordGenerator', ['generate']);
        secondOperandGenerator.generate.and.returnValue('one');
        captchaFactory.setSecondOperandGenerator(secondOperandGenerator);
    });

    it('first operand should be numerical string', function() {
        var captcha = captchaFactory.generate();

        expect(captcha.getFirstOperand()).toBe('1');
        expect(captcha.getSecondOperand()).toBe('one');
    });

    it('random generate numeric string for first operand', function() {
        captchaFactory.generate();

        expect(firstOperandGenerator.generate).toHaveBeenCalled();
    });

    it('random generate number word for second operand', function() {
        captchaFactory.generate();

        expect(secondOperandGenerator.generate).toHaveBeenCalled();
    });
});
