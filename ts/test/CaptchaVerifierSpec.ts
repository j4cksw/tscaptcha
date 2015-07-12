/// <reference path='../../bower_components/DefinitelyTyped/jasmine/jasmine.d.ts' />
/// <reference path='../../ts/src/CaptchaVerifier.ts' />
describe('CaptchaVerifier', () => {
    it('return true when verify pass', () => {
        var verifier = new CaptchaVerifier();

        var sampleCaptcha = new Captcha('1', 'one');

        var result = verifier.verify(sampleCaptcha, 2);

        expect(result).toBeTruthy();
    })
})
