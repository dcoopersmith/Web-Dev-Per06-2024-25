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

let currQuestion = 0;
let score = 0;

function loadQues() 
{
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = "";

    for ( let i = 0; i < Questions[currQuestion].a.length; i++ )
    {
        const choicesDiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].a[i].text;

        choicesDiv.appendChild(choice);
        choicesDiv.appendChild(choiceLabel);
        opt.appendChild(choicesDiv);
    }
}

loadQues();

function checkAns()
{
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if ( Questions[currQuestion].a[selectedAns].isCorrect  )
    {
        score++;
        console.log("Correct");
        nextQuestion();
    }
    else
    {
        nextQuestion();
    }
}

function loadScore() 
{
    const totalScore = document.getElementById("score");
    // ToDo: finish this later...
}

function nextQuestion() 
{
    if (  currQuestion < Questions.length - 1  )
    {
        currQuestion++;
        loadQues();
    }
    else
    {
        // ToDo: finish this function...
    }
}
