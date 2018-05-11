'use strict';

function vehicleType(color, code, age) {
    const arrVehicleTypes = ['car', 'motorbike', 'caravan', 'bike'];
    const condition = age <= 1 ? 'new' : 'used';
    const vehicle = (code >= 1 && code <= arrVehicleTypes.length)
        ? arrVehicleTypes[code - 1]
        : 'unknown vehicle';
    return 'a ' + color + ' ' + condition + ' ' + vehicle;
}

console.log(vehicleType('green', 1, 1));
console.log(vehicleType('black', 5, 8));
console.log(vehicleType('yellow', 2, 0));
console.log(vehicleType('gray', 4, 0.1));
console.log(vehicleType('black', 3, 0));
console.log(vehicleType('red', 3, 2));
