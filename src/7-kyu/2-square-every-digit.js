// square every digit
// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

const squareDigits = num => { return +num.toString().split('').map((c, i) => c * c).join('') }