function verificaPalindrome(text) {
    let reverse = text.split('').reverse().join(''); 
    return text === reverse;
  }
  console.log(verificaPalindrome('arara'));