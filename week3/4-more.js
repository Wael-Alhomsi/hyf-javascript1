'use strict';

function vehicleType(color, code) {
    if (code === 1) {
        return 'a ' + color + ' car';
    } else if (code === 2) {
        return 'a ' + color + ' motorbike';
    } else {
        return 'a ' + color + ' unknown vehicle';
    }
}

const myVehicle = vehicleType('black', 1);
console.log(myVehicle);
const hisVehicle = vehicleType('blue', 2);
console.log(hisVehicle);
const herVehicle = vehicleType('pink', 10);
console.log(herVehicle);
