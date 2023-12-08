function isPalindrome (str){
    // convert string to an array
    const arrayValues = str.split('')

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse()

    // convert array to string
    const reverseString = reverseArrayValues.join('')

    if(str == reverseString) {
        console.log('It is a palindrome')
    }
    else {
        console.log('It is not a palindrome')
    }
}
//take input
console.log(isPalindrome('hahahahahhahah'))
