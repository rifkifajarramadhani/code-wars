// exes and ohs
// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

const XO = str => {
    let x = 0;
    let o = 0;
    for(let i in str) {
        if(str[i].toLowerCase() === 'x') x++;
        if(str[i].toLowerCase() === 'o') o++;
    }

    return x === o ? true : false;
}