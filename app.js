///////// variables //////////
const words = ["butter", "snake", "three", "coding", "candy","apple"];

let gameRunning = true;

let score = 0;

let mistakes = 0;

let currentWord = null;

let displayWord = null;

let timerIndicator = false;

//////// element references /////////

let userInput = document.getElementById("input");
let button = document.getElementById("submitBtn");
let textContainer = document.getElementById("shuffledWord");
let outputElement = document.getElementById("output");
let scoreElement = document.getElementById("score");
let winOrLoseElement = document.getElementById("winOrLose");
let countdownElement = document.getElementById("countdown");
let endScreen = document.getElementById('blackScreen');
let resetElement = document.getElementById("reset");


/////funtions//////



function scrambleWord() {
    if (gameRunning === true){
  // Selects the word and puts the letters in Random Order     

  let randomIndex = Math.floor(Math.random() * words.length);
  let scrambledWord = words[randomIndex];
  let scrambledWordArray = scrambledWord.split("");

  let output = [];

  while (scrambledWordArray.length) {
    let idx = Math.floor(Math.random() * scrambledWordArray.length);
    output.push(scrambledWordArray.splice(idx, 1)[0]);
  }

  let scrambleWordShuffled = output.join("");

  currentWord = scrambledWord;
  displayWord = scrambleWordShuffled; ////////////// just added

  
  displayShuffledWord(displayWord); /////////////used to be currentWord

  console.log(currentWord);
  console.log(scrambleWordShuffled);

///////////////////////////
  if (score === 5){
    console.log("win")
    winOrLoseElement.textContent = "You Win!";
    timerIndicator = 1;
    endGame()
}

///////////////////////////

  return scrambleWordShuffled; // This is to be displayed on the screen for the user to see
}
}


function unscrambleWord(currentWord) {
    if (gameRunning === true){
  // Compares user input to the correct word

  let inputContent = userInput.value;

  if (inputContent === currentWord) {
    outputElement.textContent = "Correct";
    
    score = score + 1;
    console.log(score)
    displayScore(score)
    scrambleWord();
  } else {
    outputElement.textContent = "Try Again";
    

    displayScore(score)
    
    
  }
}
}

function displayShuffledWord(displayWord) {
    if(gameRunning === true){
 
    textContainer.textContent = displayWord; 
}
}

  
function startTimer() {
   
    if (gameRunning === true){
    let timer = 30; 
  
    let countdown = setInterval(function () {
      if (timer >= 0) {
        countdownElement.textContent = timer;
        timer = timer - 1;
        if(timerIndicator === 1){
            clearInterval(countdown);
            return; 
        }
      } else {
        clearInterval(countdown);
        countdownElement.textContent = "Time is up!";
        endGame()
        
      }
    }, 1000);
  }
}

function displayScore(score) {
    if (gameRunning === true){

scoreElement.textContent = score; 

  }
}

  function endGame(){
// Ends game and prompts restart option

    gameRunning = false;
    console.log("Game Over")
    resetElement.style.display = "block";
    


  }


 function reset(){

    console.log('resetWorking')
    timerIndicator = false
    gameRunning = true;
    score = 0;
    mistakes = 0;
    currentWord = null;
    displayWord = null;
    userInput.value = "";
    outputElement.textContent = "";
    scoreElement.textContent = 0;
    winOrLoseElement.textContent = "";
    countdownElement.textContent = "";
    resetElement.style.display = "none"; // Hides the reset button
    scrambleWord(); // Starts a new game
    startTimer();

 }


  startTimer();
  scrambleWord();



  ///////// event listeners ////////////

  button.addEventListener("click", function () {
    unscrambleWord(currentWord);
  });

resetElement.addEventListener("click", reset);