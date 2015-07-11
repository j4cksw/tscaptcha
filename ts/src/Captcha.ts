class Captcha {
    firstOperand: string;
    secondOperand: string;

    constructor(first: string, second: string){
        this.firstOperand = first;
        this.secondOperand = second;
    };

    getFirstOperand(){
        return this.firstOperand;
    };

    getSecondOperand(){
        return this.secondOperand;
    };
}
