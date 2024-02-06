// is this triangle?
// https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript

const isTriangle = (a, b, c) => {
    [a, b, c] = [a, b, c].sort((x, y) => x-y);
  
    return a + b > c;
}