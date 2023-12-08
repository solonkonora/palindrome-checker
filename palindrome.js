function palindrome () {
  const result = document.getElementById('result')
  const inputText = document.getElementById('input-text').value

  function isAlphanumeric(char) {
    return /^[a-zA-Z0-9]$/.test(char)
  }

  // Function to remove all non-alphanumeric characters
  function removeNonAlphanumeric(str) {
    let newly = ''
    for (let i = 0; i < str.length; i++) {
      if (isAlphanumeric(str[i])) {
        newly += str[i]
      }
    }
    return newly
  }

  // Remove non-alphanumeric characters from input text
  const newlyInputted = removeNonAlphanumeric(inputText)

  // Convert cleaned input string to an array
  const arrayValues = newlyInputted.split('')

  // Reverse the array values
  const reverseArrayValues = arrayValues.reverse()

  // Convert array back to string
  const reverseString = reverseArrayValues.join('')

  if (newlyInputted === reverseString) {
    result.innerHTML = 'Yes! It is a palindrome'
  } else {
    result.innerHTML = 'Ooop! It is not a palindrome'
  }
}
palindrome()
