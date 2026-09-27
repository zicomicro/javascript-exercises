const palindromes = function (string) {

    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const word = string
    .toLowerCase()
    .split('')
    .filter( character => alphanumerical.includes(character)).join('');

    const reversedString = word.split('').reverse().join('');
     return reversedString === word;

};

// Do not edit below this line
module.exports = palindromes;
