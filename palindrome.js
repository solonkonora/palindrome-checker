function palindrome (str) {
  const result = document.getElementById('result')
  const input_text = document.getElementById('input-text').value

  // convert string to an array
  const arrayValues = input-text.split('')

  // reverse the array values
  const reverseArrayValues = arrayValues.reverse('')

  // convert array to string
  const reverseString = reverseArrayValues.join('')

  if (input-text === reverseString) {
    result.innerHTML = 'It is a palindrome'
  } else {
    result.innerHTML = 'It is not a palindrome'
  }
}
palindrome()
