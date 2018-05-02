'use strict';
function advertisement(arr) {
    let str = arr[0] + 's,';
    for (let i = 1; i < (arr.length - 1); i++) {
        str += ' ' + arr[i] + 's,';
    } return 'Amazing Wael\'s Garage, we service ' + str + ' and ' + arr[arr.length - 1] + 's.';
}
let vehicles = ['car', 'motorbike', 'caravan', 'bike', 'truck',];
console.log(advertisement(vehicles));
