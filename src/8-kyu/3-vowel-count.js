// vowel count
// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

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