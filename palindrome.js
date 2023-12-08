// JavaScript code for palindrom check functionality
const inputText = document.getElementById('inputText')
const buttons = document.querySelectorAll('.container button')
const paragraph = document.querySelectorById('result')

function isPalindrome(str) {
  // convert string to an array
  const arrayValues = str.split('')

  // reverse the array values
  const reverseArrayValues = arrayValues.reverse()

  // convert array to string
  const reverseString = reverseArrayValues.join('')

  if (str == reverseString) {
    console.log('It is a palindrome')
  }
  else {
    console.log('It is not a palindrome')
  }
}
//take input
isPalindrome('hah')
