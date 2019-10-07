let questionCount = 0;
let numberCorrect = 0;
let numberWrong = 0;

const question1 = [
  {answer: "Egg->Grub->Adult", isCorrect: false},
  {answer: "Egg->Larvae->Adult", isCorrect: false},
  {answer: "Egg->Larvae-><br>Grub->Adult", isCorrect: false},
  {answer: "Egg->Larvae-><br>Pupae->Adult", isCorrect: true},
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
  {answer: "Aedes Sollicitans", isCorrect: false},
  {answer: "Culex Pipiens", isCorrect: false},
  {answer: "Ixodes Scapularis", isCorrect: true},
  {answer: "Toxorhynchites", isCorrect: false},
  {question: "Which of the following is NOT a mosquito?"}
];

const question4 = [
  {answer: "Extra protein for their eggs", isCorrect: true},
  {answer: "Extra energy for the winter", isCorrect: false},
  {answer: "Nutrients to fly", isCorrect: false},
  {answer: "To be annoying", isCorrect: false},
  {question: "Why do female mosquitoes suck blood?"}
];

const question5 = [
  {answer: "100 feet", isCorrect: false},
  {answer: "500 feet", isCorrect: false},
  {answer: "1-2 miles", isCorrect: false},
  {answer: "Up to 30 miles", isCorrect: true},
  {question: "What is a mosquitoes max range?"}
];

const questions = [question1, question2,question3,question4,question5];


function handleTestStart() {
  //this function is declared when you push the start button, it deletes the start button and draws the first question
   console.log("Test started");
   removeElement("js-start-quiz");
   $(".mosquito").html(generateQuestionElement(questions[questionCount]));
   let placeholder = 1
   $(".question-count").text("Question: " + placeholder);
}

function removeElement(elementId) {
   let element = document.getElementById(elementId);
   element.parentNode.removeChild(element);
}

function generateQuestionElement(item){
  return `
  <div class = "question">${item[4].question}</div>
         <form>
            <button onclick="checkCorrect()" class="answers-top" id="1" type="button">${item[0].answer}</button>
            <button onclick="checkCorrect()" class="answers-top" id="2" type="button">${item[1].answer}</button><br>
            <button onclick="checkCorrect()" class="answers-bottom" id="3" type="button">${item[2].answer}</button>
            <button onclick="checkCorrect()" class="answers-bottom" id="4" type="button">${item[3].answer}</button><br>
        </form> 
  `
}
function generateScoreScreen(){
    return `
      <div class = "scoreScreen"> You got <span class = "correctCount"></span>/5 correct!</div>
      <button onclick="restart()" class="restartButton" type ="button">Restart?</button>
    `
}
function renderScoreScreen(){
    console.log("Rendering score screen");
    $(".mosquito").html(generateScoreScreen());
}

function renderQuestion(item){
  console.log("renderQuestion Ran");
  $(".mosquito").html(generateQuestionElement(item));
}

function correctAnswer(){
  alert("CONGRATULAIONS");
  console.log("Answer has been clicked");
  numberCorrect ++;
  $(".correctCount").text(numberCorrect.toString());
}

function wrongAnswer(){
  alert("WRONG");
    numberWrong ++;
    $(".incorrectCount").text(numberWrong.toString());
}
 
function finalRender(){
  if (questionCount == 4){
    renderScoreScreen();
    $(".correctCount").text(numberCorrect);
  }

  else{
    questionCount ++;
    let placeholder = questionCount + 1;
    renderQuestion(questions[questionCount]);
     $(".question-count").text("Question: " + placeholder);
  }
}

function checkCorrect(){
  console.log(questionCount);
  let questionNumber = event.srcElement.id - 1;
  console.log(questionNumber + " has been clicked");
  if (questions[questionCount][questionNumber].isCorrect == true){
    console.log(questions[questionCount][questionNumber].isCorrect);
    correctAnswer();
    finalRender();
    }
    else{
      wrongAnswer();
      finalRender();
    }
  }
  
    
  


function restart(){
   questionCount = 0;
   numberCorrect = 0;
   numberWrong = 0;
   renderQuestion(questions[questionCount]);
   $(".question-count").text("Question: " + questionCount);
   $(".correctCount").text(numberCorrect.toString());
   $(".incorrectCount").text(numberWrong.toString());
}