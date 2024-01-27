// descending order
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

const descendingOrder = n => { return +n.toString().split('').map(n => +(n)).sort((a, b) => a - b).reverse().join('') }