// find the divisors
// https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript

const divisors = integer => {
    let divisors = [];
    for (let i = 0; i < integer; i++) {
        if (i !== 1 && i !== integer && integer % i === 0) divisors.push(i);
    }
    return divisors.length > 0 ? divisors : `${integer} is prime`;
}