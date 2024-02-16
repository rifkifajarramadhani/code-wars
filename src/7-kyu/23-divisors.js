// find the divisors
// https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript

/*
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"
*/

const divisors = integer => {
    let divisors = [];
    for (let i = 0; i < integer; i++) {
        if (i !== 1 && i !== integer && integer % i === 0) divisors.push(i);
    }
    return divisors.length > 0 ? divisors : `${integer} is prime`;
}