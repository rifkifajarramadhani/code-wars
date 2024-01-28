// shortest word
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

const findShort = s => { return Math.min(...s.split(' ').map(s => s.length)) };