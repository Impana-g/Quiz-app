const questions = [
  {
      question:"Which is the largest animal in the world?",
      answers:[
          {text:"Shark", correct:false},
          {text:"Blue Whale", correct:true},
          {text:"Giraffe", correct:false},
          {text:"Elephant", correct:false}
      ]
  },
  {
      question:"What is the capital of France?",
      answers:[
          {text:"Berlin", correct:false},   
          {text:"Madrid", correct:false},
          {text:"Paris", correct:true},
          {text:"Rome", correct:false}
      ]
  },
  {
      question:"Which planet is known as the Red Planet?",
      answers:[
          {text:"Earth", correct:false},   
          {text:"Mars", correct:true},
          {text:"Jupiter", correct:false},
          {text:"Venus", correct:false}
      ]
  },{
      question:"Who wrote 'Romeo and Juliet'?",
      answers:[
          {text:"Charles Dickens", correct:false},  
          {text:"William Shakespeare", correct:true},
          {text:"Mark Twain", correct:false},
          {text:"Jane Austen", correct:false}
      ]
  }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
   
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }


}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";       
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

startQuiz();