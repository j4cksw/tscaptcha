/// <reference path='../../bower_components/DefinitelyTyped/jasmine/jasmine.d.ts' />
/// <reference path='../../ts/src/CaptchaFactory.ts' />

describe('captcha', function() {

    var captchaFactory;
    var firstOperandGenerator;
    var secondOperandGenerator;

    beforeEach(function() {
        captchaFactory = new CaptchaFactory();

        firstOperandGenerator = jasmine.createSpyObj('RandomNumericGenerator', ['generate']);
        captchaFactory.setFirstOperandGenerator(firstOperandGenerator);

        secondOperandGenerator = jasmine.createSpyObj('RandomNumberWordGenerator', ['generate']);
        secondOperandGenerator.generate.and.returnValue('one');
        captchaFactory.setSecondOperandGenerator(secondOperandGenerator);
    });

    it('should generate first operand, second operand and answer correctly', function() {
        firstOperandGenerator.generate.and.returnValue(new CaptchaOperand(1, '1'));
        secondOperandGenerator.generate.and.returnValue(new CaptchaOperand(1, 'one'));

        var captcha = captchaFactory.generate();

        expect(captcha.getFirstOperand()).toBe('1');
        expect(captcha.getSecondOperand()).toBe('one');
        expect(captcha.getAnswer()).toBe(2);
    });

    it('should generate first operand, second operand and answer correctly', function() {
        firstOperandGenerator.generate.and.returnValue(new CaptchaOperand(2, '2'));
        secondOperandGenerator.generate.and.returnValue(new CaptchaOperand(1, 'one'));

        var captcha = captchaFactory.generate();

        expect(captcha.getFirstOperand()).toBe('2');
        expect(captcha.getSecondOperand()).toBe('one');
        expect(captcha.getAnswer()).toBe(3);
    });

    it('random generate numeric string for first operand', function() {
        firstOperandGenerator.generate.and.returnValue(new CaptchaOperand(2, '2'));
        secondOperandGenerator.generate.and.returnValue(new CaptchaOperand(1, 'one'));

        captchaFactory.generate();

        expect(firstOperandGenerator.generate).toHaveBeenCalled();
    });

    it('random generate number word for second operand', function() {
        firstOperandGenerator.generate.and.returnValue(new CaptchaOperand(2, '2'));
        secondOperandGenerator.generate.and.returnValue(new CaptchaOperand(1, 'one'));
        
        captchaFactory.generate();

        expect(secondOperandGenerator.generate).toHaveBeenCalled();
    });
});
