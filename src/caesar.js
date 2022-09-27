// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false

    const message = input.toLowerCase();
    let codedMessage = []
    
    for (let char of message) {
      if (alphabet.includes(char)) {
        //let index = alphabet.indexOf(char);
        if (encode) {
          const index = alphabet.indexOf(char);
          codedMessage.push(alphabet[index + shift])
        } else {
          const index = alphabet.indexOf(char, 26);
          codedMessage.push(alphabet[index - shift])
        }
      } else {
        codedMessage.push(char)
      }
    }

    return codedMessage.join("")
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
