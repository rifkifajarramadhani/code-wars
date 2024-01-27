// disemvowel trolls
// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

const disemvowel = str => {
    const vowel = ['a', 'i', 'u', 'e', 'o'];
    for (let i in vowel) {
        if(str.includes(vowel[i])) str = str.replaceAll(vowel[i], '');
        if(str.includes(vowel[i].toUpperCase())) str = str.replaceAll(vowel[i].toUpperCase(), '');
    }
    return str;
}