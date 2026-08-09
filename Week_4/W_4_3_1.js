"use strict";
class Locker {
    contents;
    constructor(initialItem) {
        this.contents = initialItem;
    }
    getItem() {
        console.log("Accessing locker....");
        return this.contents;
    }
    depositItem(newItem) {
        this.contents = newItem;
        console.log("Locker updated successfully.");
    }
}
const cashLocker = new Locker(5000);
let cash = cashLocker.getItem();
console.log(`Current Balance: ${cash}`);
const docLocker = new Locker("Property Papers-Mumbai Flat");
//let cash=cashLocker.getItem();
console.log(`Stored Document  ${docLocker.getItem()}`);
const goldLocker = new Locker({ weightGrams: 50, purity: "24K" });
const myGold = goldLocker.getItem();
console.log(`Gold Weight: ${myGold.weightGrams}g`);
