// categorize new member
// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

const openOrSenior = data => { return data.map(member => member[0] >= 55 && member[1] > 7 ? 'Senior' : 'Open') };