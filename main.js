let questionCount = 0;
let numberCorrect = 0;
let numberWrong = 0;
let isTrue = false;

const question1 = [
  {answer: "Egg->Grub->Adult", isCorrect: false},
  {answer: "Egg->Larvae->Adult", isCorrect: false},
  {answer: "Egg->Larvae->Grub->Adult", isCorrect: false},
  {answer: "Egg->Larvae->Pupae->Adult", isCorrect: true},
  {question: "A mosquitoes life is broken up into which segments?"},
  {explanation: "Mosquitoes go from eggs to larvae than pupae to adult.  This information is very important in terms of mosquito control, as most pesticides only work on one stage."}
];

const question2 = [
  {answer: "Fresh Water", isCorrect: false},
  {answer: "Salt Water", isCorrect: false},
  {answer: "Fresh and Salt Water", isCorrect: true},
  {answer: "The Ocean", isCorrect: false},
  {question: "Mosquito Eggs are laid in:"},
  {explanation:"Depending on the species, mosquitoes can lay eggs in fresh water, salt water or a combination of both (brackish water).  They will not however, ever lay eggs in the ocean as the water is too turbulent."}
];

const question3 = [
  {answer: "Aedes Sollicitans", isCorrect: false},
  {answer: "Culex Pipiens", isCorrect: false},
  {answer: "Ixodes Scapularis", isCorrect: true},
  {answer: "Toxorhynchites", isCorrect: false},
  {question: "Which of the following is NOT a mosquito?"},
  {explanation: "All are mosquito species except Ixodes Scapularis, which is the Deer Tick, or Black Legged Tick.  There are actually over 3,000 species of mosquitoes, with different life styles that need to be taken into account when treating for them."}
];

const question4 = [
  {answer: "Extra protein for their eggs", isCorrect: true},
  {answer: "Extra energy for the winter", isCorrect: false},
  {answer: "Nutrients to fly", isCorrect: false},
  {answer: "To be annoying", isCorrect: false},
  {question: "Why do female mosquitoes suck blood?"},
  {explanation: "Female mosquitoes suck blood to get extra protein for their eggs.  Male mosquitoes do not bite."}
];

const question5 = [
  {answer: "100 feet", isCorrect: false},
  {answer: "500 feet", isCorrect: false},
  {answer: "1-2 miles", isCorrect: false},
  {answer: "Up to 30 miles", isCorrect: true},
  {question: "What is a mosquitoes max flight range?"},
  {explanation: "The range of a mosquito is highly dependent on the species, but many salt marsh mosquitoes can have a range of up to 30 miles.  Fresh water or container mosquitoes tend to be signifigantly smaller, at only several hundred feet."}
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
            <input type="radio" required="required" class="answers" id="1" name = "answerSelection" type="button">${item[0].answer}</button><br>
            <input type="radio" class="answers" id="2" name = "answerSelection" type="button">${item[1].answer}</button><br>
            <input type="radio" class="answers" id="3" name = "answerSelection" type="button">${item[2].answer}</button><br>
            <input type="radio" class="answers" id="4" name = "answerSelection" type="button">${item[3].answer}</button><br>
        </form> 
        <input type="submit" value="Submit" class="questionButton" onclick="checkCorrect()">
  `
}
function generateScoreScreen(){
    return `
      <div class = "scoreScreen"> You got <span class = "correctCount"></span>/5 correct!</div>
      <button onclick="restart()" class="restartButton" type ="button">Restart?</button>
    `
}

function generateExplanationScreen(){
  return `
  <div class="rightOrWrong id="rightOrWrong"></div>
  <div class="explanation"></div>
  <button onclick="finalRender()" class ="continueButton" type="button">Continue:</button>
  `
}

function renderExplanationScreen(){
  console.log("Rendering score screen");
  $(".mosquito").html(generateExplanationScreen());
  $(".explanation").text(questions[questionCount][5].explanation);
  if (isTrue == true){
    $(".rightOrWrong").text("Correct! ");
    $(".rightOrWrong").addClass("correct");
  }
  else {
    $(".rightOrWrong").text("Incorrect: ");
    $(".rightOrWrong").addClass("incorrect");
  }
}

function renderScoreScreen(){
    console.log("Rendering score screen");
    $(".mosquito").html(generateScoreScreen());
    $(".question-count").text("Excellent work!");
}

function renderQuestion(item){
  console.log("renderQuestion Ran");
  $(".mosquito").html(generateQuestionElement(item));
}

function correctAnswer(){
  $("rightOrWrong").text("That is correct! ");
  console.log("Answer has been clicked");
  numberCorrect ++;
  $(".correctCount").text(numberCorrect.toString());
}

function wrongAnswer(){
  $("rightorWrong").text("Incorrect");
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
  let questionNumber = $('input[type=radio][name=answerSelection]:checked').attr('id') - 1;
  console.log(questionNumber);
  isTrue = questions[questionCount][questionNumber].isCorrect;
  console.log(questionNumber + " has been clicked");
  if (questions[questionCount][questionNumber].isCorrect == true){
    console.log(questions[questionCount][questionNumber].isCorrect);
    correctAnswer();
    renderExplanationScreen();
    }
    else{
      wrongAnswer();
      renderExplanationScreen();
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