// exes and ohs
// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

const XO = str => {
    let x = 0;
    let o = 0;
    for(let i in str) {
        if(str[i].toLowerCase() === 'x') x++;
        if(str[i].toLowerCase() === 'o') o++;
    }

    return x === o ? true : false;
}