'use strict';

function computeTotalAmount(amount1, amount2, amount3) {
    const totalAmount = amount1 + amount2 + amount3;
    return totalAmount;
}

const invoice = computeTotalAmount(13, 19, 44);
console.log(invoice);
