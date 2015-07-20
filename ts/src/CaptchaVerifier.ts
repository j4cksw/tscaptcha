class CaptchaVerifier {
    verify(captcha: Captcha, answer: number) {
        return ( captcha.getAnswer() == answer )
    }
}
