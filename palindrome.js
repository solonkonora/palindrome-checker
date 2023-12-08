function is_palindrome (str) {
  const result = document.getElementById('result')
  const input_text = document.getElementById('input_text').value

  // convert string to an array
  const arrayValues = input_text.split('')

  // reverse the array values
  const reverseArrayValues = arrayValues.reverse('')

  // convert array to string
  const reverseString = reverseArrayValues.join('')

  if (input_text === reverseString) {
    result.innerHTML = 'It is a palindrome'
  } else {
    result.innerHTML = 'It is not a palindrome'
  }
}
is_palindrome()
