// growth of population
// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

const nbYear = (p0, percent, aug, p) => {
    let pCurr = p0;
    let year = 0;
    for (let i = 0; pCurr < p; i++) {
        pCurr += Math.floor((pCurr * (percent / 100)) + aug);
        year++;
    }
    return year;
}