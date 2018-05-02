'use strict';
function vehicleType(color, code, age) {
    if (code === 1 && age <= 1) {
        return 'a ' + color + ' new' + ' car';
    } else if (code === 1 && age > 1) {
        return 'a ' + color + ' used' + ' car';
    } else if (code === 2 && age <= 1) {
        return 'a ' + color + ' new' + ' motorbike';
    } else if (code === 2 && age > 1) {
        return 'a ' + color + ' used' + ' motorbike';
    } else if (code > 2 && age <= 1) {
        return 'a ' + color + ' new' + ' unknown vehicle';
    } else {
        return 'a ' + color + ' used' + ' unknown vehicle';
    }
}
let myVehicle = vehicleType('red', 1, 2);
let hisVehicle = vehicleType('blue', 2, 0.4);
let herVehicle = vehicleType('pink', 10, 7);
console.log(myVehicle);
console.log(hisVehicle);
console.log(herVehicle);
