const Questions = [
    {
        q: "Fill in the blank: Snow leopards live _____.",
        a: [{text: "in the desert.", isCorrect: false},
            {text: "in the jungle.", isCorrect: false},
            {text: "in the mountains.", isCorrect: true},
            {text: "in the city.", isCorrect: false},
           ]
    },
    {
        q: "Fill in the blank: Snow leopards have _____.",
        a: [{text: "red, with whitish fur.", isCorrect: false},
            {text: "whitish-gray fur.", isCorrect: true},
            {text: "black stripes, with orange fur.", isCorrect: false},
            {text: "white dots with black fur.", isCorrect: false},
           ]
    },
    
    // add more questions here....
]; 

let currQuestion = 1;
let score = 0;

function loadQues() 
{
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = "";

    for (          )
    {
        
    }


}

loadQues();