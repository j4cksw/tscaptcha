class Captcha {
    firstOperand: string;
    secondOperand: string;
    answer:number;

    constructor(first: string, second: string, answer:number){
        this.firstOperand = first;
        this.secondOperand = second;
        this.answer = answer;
    };

    getFirstOperand(){
        return this.firstOperand;
    };

    getSecondOperand(){
        return this.secondOperand;
    }

    getAnswer(){
        return this.answer;
    }
}
