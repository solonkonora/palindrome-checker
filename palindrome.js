function palindrome (str) {
  const result = document.getElementById('result')
  const inputText = document.getElementById('input-text').value

  // convert string to an array
  const arrayValues = inputText.split('')

  // reverse the array values
  const reverseArrayValues = arrayValues.reverse('')

  // convert array to string
  const reverseString = reverseArrayValues.join('')

  if (inputText === reverseString) {
    result.innerHTML = 'It is a palindrome'
  } else {
    result.innerHTML = 'It is not a palindrome'
  }
}
palindrome()
