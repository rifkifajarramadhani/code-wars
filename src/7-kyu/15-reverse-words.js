// reverse words
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

const reverseWords = str => { return str.split(' ').map(reverse => reverse.split('').reverse().join('')).join(' ') };