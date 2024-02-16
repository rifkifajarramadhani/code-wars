// is isogram
// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/

const isIsogram = str => {
    const strArr = str.split('');
    for(let i = 0; i < strArr.length; i++) {
        for(let j = 0; j < strArr.length; j++) {
            if(i !== j && strArr[i].toUpperCase() === strArr[j].toUpperCase()) return false;
        }
    }
    return true;
}
