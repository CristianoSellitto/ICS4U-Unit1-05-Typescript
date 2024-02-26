/**
*
* This program generates a random integer from one to six for the user to guess
*
* By:      Cristiano Sellitto
* Version: 1.0
* Since:   2024-02-23
*/

import { createPrompt } from 'bun-promptx'

function checkBoardLength(width, height) {
  const boardFoot = 144
  return boardFoot / (width * height)
}

// String values
const stringWidth = createPrompt('Enter width (in): ')
const stringHeight = createPrompt('Enter height (in) ')

// Convert variables to integer and check for errors
const width = parseFloat(stringWidth.value)
const height = parseFloat(stringHeight.value)
if (isNaN(width) == true || width < 0 || isNaN(height) == true || height < 0) {
  // Invalid input
  console.log('Invalid input.\n')
} else {
  // Valid input
  const length = checkBoardLength(width, height)
  console.log(`To get one board foot, the wood needs to be ${length} inches long`)
}

// Show the program as done
console.log('\nDone.')
