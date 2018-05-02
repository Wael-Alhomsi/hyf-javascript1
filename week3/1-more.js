'use strict';
function invoiceAmount(priceItem1, priceItem2, priceItem3) {
    const totalAmount = priceItem1 + priceItem2 + priceItem3;
    return totalAmount;
}
let invoice = invoiceAmount(13, 19, 44);
console.log(invoice);
