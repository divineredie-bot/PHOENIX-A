let inputField = document.querySelector("#inputField");
let finalText = document.querySelector("#finalText");
let resultButton = document.querySelector("#result");
let num = document.querySelector("#num");

class Logic{
    constructor(inputField, finalText, resultButton, num) {
        this.inputField = inputField;
        this.finalText = finalText;
        this.resultButton = resultButton;
        this.num = num;
    }

    click(){
        this.resultButton.addEventListener("click", ()=>{this._resultSize()})
    }

    _resultSize(){
        let PHOENIX = 590000000000;
        let inpData = +(inputField.value) ;
        num.textContent = parseInt(PHOENIX/inpData) ;
    }
}

let SizeLogic = new Logic(inputField, finalText, resultButton, num);
SizeLogic.click();
