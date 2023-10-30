# Project1

My idea for this project is to create a game of scramble. 
In this game,the players must unscramble a set of letters to form a word within a given time limit of 30 seconds. If the player chooses to, they can also see a hint by pressing a button. The player looses if he runs out of time to uncreamble the word. 


The following are the steps I foresee having to take in order to build this game.

1. Initialize the game:
   - Create an array of words to be unscrambled
   - Initialize a score variable to keep track of the player's score
   - Set a time limit (e.g., 30 seconds)
   - Create a function to choose a random word from the array
   - Create a function to scramble the chosen wor
   - Display the scrambled word on the screen
   - Start a countdown timer for 30 seconds

2. Create a function to unscramble the word:
   - Get the player's input (unscrambled word) from an input field
   - Check if the input matches the unscrambled word.
   - If correct:
     - Increment the player's score
     - Display a success message
     - Choose a new random word and scramble it
     - Update the displayed word
   - If incorrect:
     - Display an error or 'keep trying' message

3. Create a hint feature:
   - Add a "Hint" button to the interface
   - When the button is clicked, reveal a letter of the scrambled word

4. Countdown timer:
   - Start a timer that counts down from 30 seconds
   - Update the displayed time remaining on the screen
   - If the timer reaches 0:
     - End the game
     - Display the final score

5. End the game:
   - Display a game over message
   - Show the player's final score
   - Allow the player to restart the game

6. Repeat the game:
   - If the player chooses to play again, reset the score and start a new game

7. Main game loop:
   - Continuously check for player input and game events
   - Respond to player actions (submitting answers, using hints)
