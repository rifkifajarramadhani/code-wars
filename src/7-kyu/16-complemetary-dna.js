// complemetary dna
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

const dnaStrand = dna => {
    let arrDna = dna.split('');
    for(let i in arrDna) {
        if(arrDna[i] === 'A') {
            arrDna[i] = 'T';
        } else if(arrDna[i] === 'T') {
            arrDna[i] = 'A';
        } else if(arrDna[i] === 'C') {
            arrDna[i] = 'G';
        } else if(arrDna[i] === 'G') {
            arrDna[i] = 'C';
        }
    }
    return arrDna.join('');
}