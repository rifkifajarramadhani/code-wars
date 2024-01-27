// highest and lowest
// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

const highAndLow = numbers => {
    const numArr = numbers.split(' ').map(num => +(num));
    
    return `${Math.max(...numArr)} ${Math.min(...numArr)}`;
}