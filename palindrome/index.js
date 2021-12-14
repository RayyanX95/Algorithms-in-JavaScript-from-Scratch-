const isPalindrome = (string) => {
  string = string.toLowerCase();
  const charactersArr = string.split('');
  const validCharacters = '0123456789abcdefghijklmnopqrstuvwxyz';

  //* add the alphabetic characters to an array (lettersArr)
  const lettersArr = [];
  charactersArr.forEach(char => {
    if(validCharacters.indexOf(char) > -1 ) lettersArr.push(char);
  });

  //* check if the string is Palindrome
  if(lettersArr.join('') === lettersArr.reverse().join('')) return true;
  else return false;
}

console.log(isPalindrome('1233321')); //true 
console.log(isPalindrome('Race car')); // true
console.log(isPalindrome('rayyan')); // false
console.log(isPalindrome('Madam I`m Adam')); // false