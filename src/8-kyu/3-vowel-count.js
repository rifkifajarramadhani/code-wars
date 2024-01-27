// vowel count
// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

const getCount = str => {
    const vowels = ['a', 'i', 'u', 'e', 'o'];
    const strArr = str.split('');
    let count = 0;
    for(let i = 0; i < vowels.length; i++) {
        for(let j = 0; j < strArr.length; j++) {
            if(strArr[j] == vowels[i]) count++;
        }
    }
    return count;
}