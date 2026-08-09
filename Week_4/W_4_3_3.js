"use strict";
function getFirstPackage(items) {
    return items[0];
}
function wrapBox(item) {
    return {
        parcel: item,
        timestamp: new Date()
    };
}
const cities = ["Mumbai", "Delhi", "Bangalore"];
const firstCity = getFirstPackage(cities);
console.log(`Sending first parcel to ${firstCity.toUpperCase()}`);
const pincodes = [400001, 110001, 560001];
const firstPin = getFirstPackage(pincodes);
console.log(`Starting delievery at Pincode: ${firstPin}`);
const phone = { brand: "Apple", model: "iPhone 15" };
const packedPhone = wrapBox(phone);
console.log(`Packed item : ${packedPhone.parcel.brand} of ${packedPhone.parcel.model} at ${packedPhone.timestamp}`);
const autoCity = getFirstPackage(cities);
