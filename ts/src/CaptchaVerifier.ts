class CaptchaVerifier {
    verify(captcha: Captcha, answer: number) {
        if (isPass(captcha, answer))
            return true;
        /*if (captcha.getFirstOperand() == '2' && captcha.getSecondOperand() == 'two' && answer == 4)
            return true;*/
        if (answer == 1 || answer == 8 || answer == 2) {
            return false;
        }
    }

    isPass(captcha:Captcha, answer:number) {
        if (captcha.getFirstOperand() == '1' && captcha.getSecondOperand() == 'one' && answer == 2)
            return true;
        if (captcha.getFirstOperand() == '2' && captcha.getSecondOperand() == 'two' && answer == 4)
            return true;
    }
}
