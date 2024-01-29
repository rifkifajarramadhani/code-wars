// find the next perfect square
// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript

const findNextSquare = sq => { return Math.sqrt(sq) % 1 === 0 ? +(Math.sqrt(sq) + 1) * +(Math.sqrt(sq) + 1) : -1 };