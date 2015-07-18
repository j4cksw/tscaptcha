/// <reference path='../../bower_components/DefinitelyTyped/jasmine/jasmine.d.ts' />
/// <reference path='../../ts/src/CaptchaVerifier.ts' />
describe('CaptchaVerifier', () => {

    describe('Passing', () => {
        var passingCases = [
            {
                captcha: new Captcha('1', 'one'),
                answer: 2,
                expected: true
            },
            {
                captcha: new Captcha('2', 'two'),
                answer: 4,
                expected: true
            }
        ];

        passingCases.forEach(function(testData) {
            it('return true when verify pass', () => {
                var verifier = new CaptchaVerifier();

                //var sampleCaptcha = new Captcha('1', 'one');

                var result = verifier.verify(testData.captcha, testData.answer);

                expect(result).toBe(testData.expected);
            })
        })
    })

    describe('Failing', () => {
        var failingCases = [
            {
                captcha: new Captcha('1', 'one'),
                answer: 1,
                expected: false
            },
            {
                captcha: new Captcha('2', 'two'),
                answer: 8,
                expected: false
            }
        ]

        failingCases.forEach(function(testData) {
            it('return false when verify fail', () => {
                var verifier = new CaptchaVerifier();

                var result = verifier.verify(testData.captcha, testData.answer);

                expect(result).toBe(testData.expected);
            })
        })
    })
})
