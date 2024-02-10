// remove first minimum
// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

const removeSmallest = numbers => {
    const min = Math.min(...numbers);
    let found = false;
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === min) {
            if(found) {
                result.push(numbers[i])
            }
        } else {
            result.push(numbers[i])
        }
        if (numbers[i] === min) found = true;
    }
    return result;
}