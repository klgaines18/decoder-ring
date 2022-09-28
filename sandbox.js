// you can add any code you want within this function scope
const alphabetPrime = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


function substitution(input, alphabet, encode = true) {
  // your solution code here
  const alphabetArray = alphabet.split("");
  
  let findDuplicates = alphabetArray.filter((item, index) => alphabetArray.indexOf(item) != index)
  if(findDuplicates.length !== 0 || alphabetArray.length !== 26) return false

  const message = input.toLowerCase();
  let codedMessage = []

  for (let char of message) {
    if (encode) {
      if (alphabetPrime.includes(char)) {
        let index = alphabetPrime.indexOf(char)
        codedMessage.push(alphabetArray[index])
      } else {
        codedMessage.push(char)
      }
    } else {
      if (alphabetArray.includes(char)) {
        let index = alphabetArray.indexOf(char)
        codedMessage.push(alphabetPrime[index])
      } else {
        codedMessage.push(char)
      }
    }
  }

  return codedMessage.join("")
}

const tester = substitution("thinkful", "abcabcabcabcabcabcabcabcyz")
console.log(tester)