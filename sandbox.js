const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function caesar(input, shift, encode = true) {
  // your solution code here
  if (!shift || shift === 0 || shift < -25 || shift > 25) return false

  const message = input.toLowerCase();
  let codedMessage = []
  
  for (let char of message) {
    if (alphabet.includes(char)) {
      let index = 0;
      if ((encode && shift > 0) || (!encode && shift < 0)) {
        index = alphabet.indexOf(char);
      } else {
        index = alphabet.lastIndexOf(char);
      };
      const newChar = encode ? alphabet[index + shift] : alphabet[index - shift];
      codedMessage.push(newChar)
    } else {
      codedMessage.push(char)
    }
  }

  return codedMessage.join("")
}

tester = caesar("zebra magazine", -3)
console.log(tester)