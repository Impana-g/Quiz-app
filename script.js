
const questions = [
  {
    question: "What is the Dark Web?",
    answers: [
      { text: "Public part of the internet", correct: false },
      { text: "Hidden part of the internet", correct: true },
      { text: "Social media", correct: false },
      { text: "Search engine", correct: false }
    ]
  },
  {
    question: "Which software is commonly used to access the Dark Web?",
    answers: [
      { text: "Chrome", correct: false },
      { text: "Firefox", correct: false },
      { text: "Tor Browser", correct: true },
      { text: "Internet Explorer", correct: false }
    ]
  },
  {
    question: "The Dark Web can be accessed using Google.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true }
    ]
  },
  {
    question: "Why is the Dark Web hard to track?",
    answers: [
      { text: "Slow internet", correct: false },
      { text: "Strong anonymity", correct: true },
      { text: "No websites", correct: false },
      { text: "Old technology", correct: false }
    ]
  },
  {
    question: "The Dark Web is part of which larger network?",
    answers: [
      { text: "Surface web", correct: false },
      { text: "Deep web", correct: true },
      { text: "Local network", correct: false },
      { text: "Email system", correct: false }
    ]
  },
  {
    question: "Tor helps users by providing:",
    answers: [
      { text: "Speed", correct: false },
      { text: "Storage", correct: false },
      { text: "Anonymity", correct: true },
      { text: "Antivirus", correct: false }
    ]
  },
  {
    question: "Which activity is common on the Dark Web?",
    answers: [
      { text: "Online shopping", correct: false },
      { text: "Data theft", correct: true },
      { text: "Video streaming", correct: false },
      { text: "Online classes", correct: false }
    ]
  },
  {
    question: "Ransomware is used to:",
    answers: [
      { text: "Clean systems", correct: false },
      { text: "Lock data and demand money", correct: true },
      { text: "Speed up computers", correct: false },
      { text: "Backup files", correct: false }
    ]
  },
  {
    question: "Selling stolen credit card details is an example of:",
    answers: [
      { text: "Ethical hacking", correct: false },
      { text: "Cybercrime", correct: true },
      { text: "Data recovery", correct: false },
      { text: "Encryption", correct: false }
    ]
  },
  {
    question: "Cybercriminals use the Dark Web to stay anonymous.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false }
    ]
  },
  {
    question: "Which of the following is a cybercrime?",
    answers: [
      { text: "Coding", correct: false },
      { text: "Phishing", correct: true },
      { text: "Online learning", correct: false },
      { text: "Blogging", correct: false }
    ]
  },
  {
    question: "Dark Web marketplaces mainly deal with:",
    answers: [
      { text: "Legal books", correct: false },
      { text: "Illegal goods and services", correct: true },
      { text: "Movies", correct: false },
      { text: "Games", correct: false }
    ]
  },
  {
    question: "One major risk of cybercrime is:",
    answers: [
      { text: "Free internet", correct: false },
      { text: "Financial loss", correct: true },
      { text: "Faster systems", correct: false },
      { text: "Better security", correct: false }
    ]
  },
  {
    question: "Data theft affects:",
    answers: [
      { text: "Only companies", correct: false },
      { text: "Only hackers", correct: false },
      { text: "Individuals and businesses", correct: true },
      { text: "No one", correct: false }
    ]
  },
  {
    question: "Cybercrime can damage a company’s:",
    answers: [
      { text: "Color theme", correct: false },
      { text: "Reputation", correct: true },
      { text: "Office building", correct: false },
      { text: "Logo size", correct: false }
    ]
  },
  {
    question: "Identity theft means:",
    answers: [
      { text: "Creating new ID", correct: false },
      { text: "Stealing personal information", correct: true },
      { text: "Forgetting password", correct: false },
      { text: "Changing username", correct: false }
    ]
  },
  {
    question: "Cybercrime has no real-world impact.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true }
    ]
  },
  {
    question: "Online fraud mainly targets:",
    answers: [
      { text: "Computers", correct: false },
      { text: "Personal and financial data", correct: true },
      { text: "Internet cables", correct: false },
      { text: "Hardware", correct: false }
    ]
  },
  {
    question: "Cybersecurity helps by:",
    answers: [
      { text: "Increasing crime", correct: false },
      { text: "Protecting data", correct: true },
      { text: "Hacking systems", correct: false },
      { text: "Sharing passwords", correct: false }
    ]
  },
  {
    question: "Which is a good cybersecurity practice?",
    answers: [
      { text: "Weak passwords", correct: false },
      { text: "Sharing OTPs", correct: false },
      { text: "Safe browsing", correct: true },
      { text: "Clicking unknown links", correct: false }
    ]
  },
  {
    question: "Strong authentication means:",
    answers: [
      { text: "Simple login", correct: false },
      { text: "Multiple security steps", correct: true },
      { text: "No password", correct: false },
      { text: "Public access", correct: false }
    ]
  },
  {
    question: "Two-factor authentication provides:",
    answers: [
      { text: "Less security", correct: false },
      { text: "Extra protection", correct: true },
      { text: "Faster hacking", correct: false },
      { text: "No benefit", correct: false }
    ]
  },
  {
    question: "Awareness helps reduce cybercrime risks.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false }
    ]
  },
  {
    question: "Updating software helps to:",
    answers: [
      { text: "Add viruses", correct: false },
      { text: "Fix security issues", correct: true },
      { text: "Slow the system", correct: false },
      { text: "Remove internet", correct: false }
    ]
  }
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
     prevButton.style.display = "none";
    showQuestion();
}

function showQuestion(){
    resetState();
   
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        const optionLabels = ["A", "B", "C", "D"];
button.innerHTML = optionLabels[currentQuestion.answers.indexOf(answer)] + ". " + answer.text;

        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        if(currentQuestionIndex > 0){
    prevButton.style.display = "block";
} else {
    prevButton.style.display = "none";
}

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
        score++;
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
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handlePrevButton(){
    currentQuestionIndex--;
    showQuestion();
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
    prevButton.addEventListener("click", handlePrevButton);

});

startQuiz();