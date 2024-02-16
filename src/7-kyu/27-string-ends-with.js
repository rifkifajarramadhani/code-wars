// string ends with?
// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

const solution = (str, ending) => {
    return str.includes(ending) && str[str.length - 1] === ending[ending.length - 1] || ending === '';
}