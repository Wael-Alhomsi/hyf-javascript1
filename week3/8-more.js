'use strict';

function advertisement(arr) {
    let str = arr[0] + 's,';
    for (let i = 1; i < (arr.length - 1); i++) {
        str += ' ' + arr[i] + 's,';
    }
    return 'Amazing Wael\'s Garage, we service ' + str + ' and ' + arr[arr.length - 1] + 's.';
}
const vehicles = ['car', 'motorbike', 'caravan', 'bike',];

console.log(advertisement(vehicles));
