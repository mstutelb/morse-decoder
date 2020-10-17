const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  // write your solution here
  const resultArray = expr.split('**********');
  const result = [];
  resultArray.forEach((wordBool) => {
    let word = [];
    for (let j = 0; j < wordBool.length / 10; j++) {

      let letterBool = wordBool.slice(10 * j, 10 * (j + 1));
      let letter = '';
      for (let i = 0; i < 5; i++) {
        const charecter = letterBool.slice(0, 2);
        letterBool = letterBool.slice(2);
        if (charecter === '10') {
          letter += '.';
        } else if (charecter === '11') {
          letter += '-';
        }
      }
      word.push(MORSE_TABLE[letter]);
    }
    result.push(word.join(''));
  });

  return result.join(' ');
}

module.exports = {
  decode,
};
