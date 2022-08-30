function isPalindrome(word) {
  // Write your algorithm here
  const checkWord=word.split('')

const reversedCheckWord= checkWord.reverse();

const joinReversedWord=reversedCheckWord.join('')

  if(word === joinReversedWord){
    // return `${word} is a Palindrome`
    return true
    }
    {
      // return `${word} is NOT a Palindrome`
      return false
    }
  }


console.log(isPalindrome('deified'));
console.log(isPalindrome('wow'));
console.log(isPalindrome('cow'));


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
