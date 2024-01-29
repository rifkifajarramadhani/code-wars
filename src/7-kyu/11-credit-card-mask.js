// credit card mask
// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

const maskify = cc => {
    if(cc.length >= 4) {
        for(let i = 0; i < cc.length; i++) {
            if(i < cc.length - 4) cc = cc.replace(cc[i], '#');
        }
    }
    return cc;
}