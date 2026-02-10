let answer = document.querySelectorAll(".answer");
let questionIcon = document.querySelectorAll(".question-icon");

class Answers{
    constructor(clickBut){
        this.clickBut = clickBut;
    
    }

    addEvent() {
       this.clickBut.forEach((element, i) => {
            element.addEventListener('click', () =>{
                answer[i].classList.toggle("open")
            })
       }); 
    }
}

let final = new Answers(questionIcon);
final.addEvent();