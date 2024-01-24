// day 2
// is isogram
// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

const isIsogram = str => {
    const strArr = str.split('');
    for(let i = 0; i < strArr.length; i++) {
        for(let j = 0; j < strArr.length; j++) {
            if(i !== j && strArr[i].toUpperCase() === strArr[j].toUpperCase()) return false;
        }
    }
    return true;
}
