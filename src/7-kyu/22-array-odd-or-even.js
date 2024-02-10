// odd or even
// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript

const oddOrEven = array => array.reduce((accumulator, current) => accumulator + current, 0) % 2 === 0 ? 'even' : 'odd';