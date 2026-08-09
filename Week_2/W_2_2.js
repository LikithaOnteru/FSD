"use strict";
//Arrow Functions
function calculateTotal(price, tax) {
    return price + (price * tax);
}
const calculateArrow = (price, tax) => {
    return price + (price * tax);
};
const getWelcome = (theatre) => `Welcome to ${theatre} Cinemas!`;
const ticketPrice = 250;
const gstRate = 0.18;
console.log(getWelcome("PVR"));
const total1 = calculateTotal(ticketPrice, gstRate);
console.log(`Total Ticket Price: ${total1}`);
const total2 = calculateArrow(ticketPrice, gstRate);
console.log(`Total Ticket Price using Arrow Function: ${total2}`);
