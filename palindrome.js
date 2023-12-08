function isPalindrome(str) {
  const inputText = document.getElementById('inputText').value
  const result = document.getElementById('result')

  // convert string to an array
  const arrayValues = str.split('');

  // reverse the array values
  const reverseArrayValues = arrayValues.reverse();

  // convert array to string
  const reverseString = reverseArrayValues.join('');

  if (str == reverseString) {
    result.innerHTML = 'It is a palindrome';
  } else {
    result.innerHTML = 'It is not a palindrome';
  }
}
isPalindrome(inputText)
