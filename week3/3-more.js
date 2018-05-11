'use strict';

function printObject(obj) {
    for (const key in obj) {
        console.log(key + ': ' + obj[key]);
    }
}

const me = {};
me.firstName = 'Wael';
me.lastName = 'Alhomsi';
me.nationality = 'Syrian';
me.age = 39;
me.currentCity = 'Wijk bij Duurstede';

printObject(me);
