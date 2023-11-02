///////// variables //////////
const words = ["one","two","three","four","five"]

let score = 0;

let currentWord = null




//////// element references /////////

let userInput = document.getElementById("input");
let button = document.getElementById("submitBtn");












/////funtions//////


//function startGame(){

// Initializes the game    

//}


function scrambleWord(){
// Selects the word and puts the letters in Random Order

    let randomIndex = Math.floor(Math.random() * words.length);
    let scrambledWord = words[randomIndex];
    let scrambledWordArray = scrambledWord.split('');

    let output = [];

    while (scrambledWordArray.length) {
        let idx = Math.floor(Math.random() * scrambledWordArray.length);
        output.push(scrambledWordArray.splice(idx, 1)[0]);
    }

    let scrambleWordShuffled = output.join("");

    //unscrambleWord(scrambledWord);
    currentWord = scrambledWord;

    //unscrambleWord(currentWord)

    console.log(scrambledWord);
    console.log(scrambleWordShuffled)

     

    return scrambleWordShuffled;  // This is to be displayed on the screen for the user to see

    
}
    

function unscrambleWord(currentWord){
    // Compares user input to the correct word
   
    let inputContent = userInput.value;
    console.log(inputContent)
    
    //console.log(currentWord)


         //if (inputContent === currentWord){
            // console.log('Correct');
        // }
        //else {
            //console.log('Incorrect');
       // }
     };



//function hint(){

// Provide a hint to the player if the player asks for it 

//}

//function timer(){
// Counts down 30 seconds once every new word appears


 //setTimeout(timer, 30000);


//}

//function updateScore() {

// Updates player score     

//}

//function endGame(){

// Ends game and displays final score

//}

scrambleWord()



button.addEventListener("click", function() {
    unscrambleWord(currentWord);
});


//


