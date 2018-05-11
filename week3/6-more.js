'use strict';

function vehicleType(color, code, age) {
  const condition = age <= 1 ? 'new' : 'used';
  if (code === 1) {
    return 'a ' + color + ' ' + condition + ' car';
  } else if (code === 2) {
    return 'a ' + color + ' ' + condition + ' motorbike';
  } else if (code > 2) {
    return 'a ' + color + ' ' + condition + ' unknown vehicle';
  }
}

const myVehicle = vehicleType('black', 1, 2);
console.log(myVehicle);
const hisVehicle = vehicleType('blue', 2, 0.4);
console.log(hisVehicle);
const herVehicle = vehicleType('pink', 10, 7);
console.log(herVehicle);

