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
let myVehicle = vehicleType('red', 1);
let hisVehicle = vehicleType('blue', 2);
let herVehicle = vehicleType('pink', 10);
console.log(myVehicle);
console.log(hisVehicle);
console.log(herVehicle);
