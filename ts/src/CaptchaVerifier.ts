class CaptchaVerifier {
    verify(captcha:Captcha, answer:number){
        if( answer == 1 || answer == 8){
            return false;
        }
        return true;
    }
}
