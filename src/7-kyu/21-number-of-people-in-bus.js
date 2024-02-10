// number of people in bus
// https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

const number = busStops => {
    let peopleIn = 0;
    let peopleOut = 0;
    for (let i in busStops) {
        if (i === 0) {
            peopleIn = busStops[i][0];
            peopleOut = busStops[i][1];
        } else {
            peopleIn += busStops[i][0];;
            peopleOut += busStops[i][1];
        }
    }
    return peopleIn - peopleOut;
}