/// <reference path='../../bower_components/DefinitelyTyped/jasmine/jasmine.d.ts' />
/// <reference path='../../ts/src/CaptchaFactory.ts' />

describe('captcha', function() {
    it('first operand should be numerical string', function() {
        var captchaFactory = new CaptchaFactory();

        var randomNumericGenerator = jasmine.createSpyObj('RandomNumericGenerator', ['generate']);
        captchaFactory.setFirstOperandGenerator(randomNumericGenerator)
        
        var captcha = captchaFactory.generate();

        expect(captcha.getFirstOperand()).toBe('1');
        expect(captcha.getSecondOperand()).toBe('one');
    });

    it('random generate numeric string for first operand', function() {
        var captchaFactory = new CaptchaFactory();

        var randomNumericGenerator = jasmine.createSpyObj('RandomNumericGenerator', ['generate']);
        captchaFactory.setFirstOperandGenerator(randomNumericGenerator)

        captchaFactory.generate();

        expect(randomNumericGenerator.generate).toHaveBeenCalled();
    });
});
