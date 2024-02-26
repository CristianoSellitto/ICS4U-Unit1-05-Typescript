/**
*
* This program generates a random integer from one to six for the user to guess
*
* By:      Cristiano Sellitto
* Version: 1.0
* Since:   2024-02-23
*/

import { createPrompt } from 'bun-promptx'

// Generate an integer from 1-6
const randomInt = Math.floor(Math.random() * 6) + 1

// Guess loop
let guesses = 0
while (true) {
  // Guessed string
  const stringGuess = createPrompt('Choose a number from 1 to 6: ')

  if (stringGuess.value == "quit") {
    break
  }

  // Convert guess to integer and check for errors
  const intGuess = parseInt(stringGuess.value)
  if (isNaN(intGuess) == true || intGuess > 6 || intGuess < 1) {
    // Invalid input
    console.log('Invalid input.\n')
  } else {
    // Valid input
    if (intGuess == randomInt) {
      console.log(`\nYou guessed correctly in ${guesses + 1} guess(es).`)
      break
    } else if (intGuess > randomInt) {
      console.log('Your guess is too high.\n')
    } else if (intGuess < randomInt) {
      console.log('Your guess is too low.\n')
    }
  }
  guesses++
}

// Show the program as done
console.log('\nDone.')
