// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const letterCoordinates = {
    "a": "11",
    "b": "21",
    "c": "31",
    "d": "41",
    "e": "51",
    "f": "12",
    "g": "22",
    "h": "32",
    "i": "42",
    "j": "42",
    "k": "52",
    "l": "13",
    "m": "23",
    "n": "33",
    "o": "43",
    "p": "53",
    "q": "14",
    "r": "24",
    "s": "34",
    "t": "44",
    "u": "54",
    "v": "15",
    "w": "25",
    "x": "35",
    "y": "45",
    "z": "55"
  };

  const letters = Object.keys(letterCoordinates);
  const coordinates = Object.values(letterCoordinates);
    
  function decoder(input) {
    let codedMessage = []
    decodeArray = input.split(" ");

    for (let i = 0; i < decodeArray.length; i++) {
        const codedword = decodeArray[i];
        const wordCoordinates = codedword.match(/.{2}/g)
        for (let j = 0; j < wordCoordinates.length; j++) {
            const coord = wordCoordinates[j]
            if (coord === "42") {
                codedMessage.push("(i/j)")
            } else {
                const index = coordinates.indexOf(coord);
                codedMessage.push(letters[index])
            }
        }
        if (i !== decodeArray.length - 1) codedMessage.push(" ")
    }

    return codedMessage.join("")
  }


  function encoder(input) {
      let codedMessage = []
      const message = input.toLowerCase();
          
      for (let char of message) {
          if (letters.includes(char)) {
              codedMessage.push(letterCoordinates[char])
          } else {
              codedMessage.push(char)
          }
      }

      return codedMessage.join("")
  }


  function polybius(input, encode = true) {
      // your solution code here
      if (!encode) {
          const lengthCheck = input.replace(/\s+/g, '')
          if (lengthCheck.length % 2 !== 0) return false
      }

      return encode ? encoder(input) : decoder(input)
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
