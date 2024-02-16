// find the stray number
// https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript

const stray = numbers => {
    const sorted = numbers.sort((a, b) => a - b);
    return sorted[0] < sorted[1] ? sorted[0] : sorted[sorted.length - 1];
}