const question1 = [
  {answer: "Egg-><br>Grub-><br>Adult", isCorrect: false},
  {answer: "Egg-><br>Larvae-><br>Adult", isCorrect: false},
  {answer: "Egg-><br>Larvae-><br>Grub-><br>Adult", isCorrect: false},
  {answer: "Egg-><br>Larvae-><br>Pupae-><br>Adult", isCorrect: true},
  {question: "A mosquitoes life is broken up into which segments?"}
];

const question2 = [
  {answer: "Fresh Water", isCorrect: false},
  {answer: "Salt Water", isCorrect: false},
  {answer: "Fresh and Salt Water", isCorrect: true},
  {answer: "The Ocean", isCorrect: false},
  {question: "Mosquito Eggs are laid in:"}
];

const question3 = [
  {answer: "Placeholder", isCorrect: false},
  {answer: "Placeholder", isCorrect: false},
  {answer: "Placeholder", isCorrect: true},
  {answer: "Placeholder", isCorrect: false},
  {question: "Which of the following are NOT a mosquito?"}
];

const question4 = [
  {answer: "Extra protein for their eggs", isCorrect: true},
  {answer: "Nutrients to fly", isCorrect: false},
  {answer: "Extra energy to store to so they can survive the winter", isCorrect: false},
  {answer: "To be annoying", isCorrect: false},
  {question: "Why do female mosquitoes suck blood?"}
];

const question5 = [
  {answer: "100 feet", isCorrect: false},
  {answer: "500 feet", isCorrect: false},
  {answer: "1-2 miles", isCorrect: false},
  {answer: "Up to 30 miles", isCorrect: true},
  {question: "What is the max range mosquitoes will wander from where they’re borne?"}
];

const questions = [question1, question2,question3,question4,question5];


function handleTestStart() {
  //this function is declared when you push the start button, it deletes the start button and draws the first question
   console.log("i pooped lol");
   removeElement("js-start-quiz");
   renderQuestion(questions[0]);
}

function removeElement(elementId) {
   let element = document.getElementById(elementId);
   element.parentNode.removeChild(element);
}

function generateQuestionElement(item){
  return `
  <div class = "question">${item[4].question}</div>
    <container class = "answer-container">
        <div class = "answers answers-top">${item[0].answer}</div>
        <div class = "answers answers-top">${item[1].answer}</div>
        <br>
        <div class = "answers answers-bottom">${item[2].answer}</div>
        <div class = "answers answers-bottom">${item[3].answer}</div>
    </container>
  `
}

function renderQuestion(item){
  console.log("renderQuestion Ran");
  $(".mosquito").html(generateQuestionElement(item));
}

console.log(question1[2].isCorrect);