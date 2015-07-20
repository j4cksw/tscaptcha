class CaptchaOperand {
    display: string;
    value: number;

    constructor( value:number, display:string ){
        this.display = display
        this.value = value
    }

    getDisplay(){
        return this.display;
    }

    getValue(){
        return this.value;
    }
}
