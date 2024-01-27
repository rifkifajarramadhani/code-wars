// sum positive
// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

const positiveSum = arr => { return arr.reduce(getSum, 0) };

const getSum = (total, current) => {
    return total += current > 0 ? current : 0;
}

const arr = [12, 0 , -3, 10];
console.log(positiveSum(arr));