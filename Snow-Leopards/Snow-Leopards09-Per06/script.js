const Questions = [
    {
        q: "Fill in the blank: Snow leopards live _____.",
        a: [{text: "in the desert.", isCorrect: false},
            {text: "in the jungle.", isCorrect: false},
            {text: "in the mountains.", isCorrect: true},
            {text: "in the city.", isCorrect: false},
           ]
    },
    // add more questions here....
]; 

let currQuestion = 0;
let score = 0;

function loadQues() 
{
    const question = document.getElementById("ques");
    question.textContent = "Palm Middle School";
}

loadQues();