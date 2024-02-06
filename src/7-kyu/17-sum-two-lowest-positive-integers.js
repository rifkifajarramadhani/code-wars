// sum of two lowest positive integers
// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

const sumTwoSmallestNumbers = numbers => {
    const min = Math.min(...numbers);
    numbers.splice(numbers.indexOf(min), 1)
    const minn = Math.min(...numbers);

    return min + minn;
}