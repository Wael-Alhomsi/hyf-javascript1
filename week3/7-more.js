'use strict';

const arrVehicleTypes = ['car', 'motorbike', 'caravan', 'bike',];
function vehicleType(color, code, age) {
    if ((code - 1) === arrVehicleTypes.indexOf('car') && age <= 1) {
        return 'a ' + color + ' new' + ' car';
    } else if ((code - 1) === arrVehicleTypes.indexOf('car') && age > 1) {
        return 'a ' + color + ' used' + ' car';
    } else if ((code - 1) === arrVehicleTypes.indexOf('motorbike') && age <= 1) {
        return 'a ' + color + ' new' + ' motorbike';
    } else if ((code - 1) === arrVehicleTypes.indexOf('motorbike') && age > 1) {
        return 'a ' + color + ' used' + ' motorbike';
    } else if ((code - 1) === arrVehicleTypes.indexOf('caravan') && age <= 1) {
        return 'a ' + color + ' new' + ' caravan';
    } else if ((code - 1) === arrVehicleTypes.indexOf('caravan') && age > 1) {
        return 'a ' + color + ' used' + ' caravan';
    } else if ((code - 1) === arrVehicleTypes.indexOf('bike') && age <= 1) {
        return 'a ' + color + ' new' + ' bike';
    } else if ((code - 1) === arrVehicleTypes.indexOf('bike') && age > 1) {
        return 'a ' + color + ' used' + ' bike';
    } else if (code > 4 && age <= 1) {
        return 'a ' + color + ' new' + ' unknown vehicle';
    } else {
        return 'a ' + color + ' used' + ' unknown vehicle';
    }
}
console.log(vehicleType('green', 1, 1));
console.log(vehicleType('black', 5, 8));
console.log(vehicleType('yellow', 2, 0));
console.log(vehicleType('gray', 4, 0.1));
console.log(vehicleType('black', 3, 0));
console.log(vehicleType('red', 3, 2));
