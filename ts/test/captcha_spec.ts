/// <reference path='../../bower_components/DefinitelyTyped/jasmine/jasmine.d.ts' />
/// <reference path='../../ts/src/CaptchaFactory.ts' />

describe('captcha', function() {
    it('first operand should be numerical string', function() {
        var captchaFactory = new CaptchaFactory();

        var captcha = captchaFactory.generate();

        expect(captcha.getFirstOperand()).toBe('1');
    });

    it('second operand should be number word', function() {
        var captchaFactory = new CaptchaFactory();

        var captcha = captchaFactory.generate();
        
        expect(captcha.getSecondOperand()).toBe('one');
    });
});
