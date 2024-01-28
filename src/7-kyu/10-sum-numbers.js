// sum numbers
// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

const getSum = (a, b) => {
    let sum = 0;
    if(b < a) [a, b] = [b, a]
    for(let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
}