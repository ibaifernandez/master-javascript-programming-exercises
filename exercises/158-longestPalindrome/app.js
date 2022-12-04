function findLongestPalindrome(sentence) {
  sentenceInLowerCase = sentence.toLowerCase();
  const reversedSentence = reverseString(sentenceInLowerCase);
  console.log(reversedSentence)
  const arr = sentenceInLowerCase.split(' ');
  const reversedArr = reversedSentence.split(' ');
  const longestPalindromesArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < reversedArr.length; j++) {
      if (arr[i] === reversedArr[j]) {
      longestPalindromesArr.push(arr[i]);
    }
  }
  }
  
  let longestPalindromeLength = longestPalindromesArr[0].length;
  let longestPalindrome;
  for (let i = 0; i < longestPalindromesArr.length; i++) {
    console.log(longestPalindromesArr[i].length)
    if (longestPalindromesArr[i].length > longestPalindromeLength) {
      longestPalindromeLength = longestPalindromesArr[i].length;
      longestPalindrome = longestPalindromesArr[i];
      
    }
  }
    return longestPalindrome;

  }      


function reverseString(string) {
  const arr = string.split('');
  arr.reverse()
  return arr.join('')
}

function isPalindrome(word) {
  let len = word.length;
 
  let i = 0;
  let j = len - 1;
  
  while (i < j) {
    if (word[i] != word[j]) {
      return false;
    }
    i += 1;
    j -= 1;
  }
  return true;
}

console.log(isPalindrome("My dad is a racecar athlete"))
