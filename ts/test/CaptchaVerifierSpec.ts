/// <reference path='../../bower_components/DefinitelyTyped/jasmine/jasmine.d.ts' />
/// <reference path='../../ts/src/CaptchaVerifier.ts' />
describe('CaptchaVerifier', () => {

    describe('Passing', () => {
        var passingCases = [
            {
                captcha: new Captcha('1', 'one', 2),
                answer: 2,
                expected: true
            },
            {
                captcha: new Captcha('2', 'two', 4),
                answer: 4,
                expected: true
            },
        ];

        passingCases.forEach(function(testData) {
            it('should return true when verify pass for ' + JSON.stringify(testData.captcha), () => {
                var verifier = new CaptchaVerifier();

                var result = verifier.verify(testData.captcha, testData.answer);

                expect(result).toBe(testData.expected);
            })
        })
    })

    describe('Failing', () => {
        var failingCases = [
            {
                captcha: new Captcha('1', 'one', 2),
                answer: 1,
                expected: false
            },
            {
                captcha: new Captcha('2', 'two', 4),
                answer: 8,
                expected: false
            },
            {
                captcha: new Captcha('3', 'two', 5),
                answer: 2,
                expected: false
            }
        ]

        failingCases.forEach(function(testData) {
            it('should return false when verify fail for ' + JSON.stringify(testData.captcha), () => {
                var verifier = new CaptchaVerifier();

                var result = verifier.verify(testData.captcha, testData.answer);

                expect(result).toBe(testData.expected);
            })
        })
    })
})
