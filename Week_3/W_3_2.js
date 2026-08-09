"use strict";
class DigitalWallet {
    holderName;
    balance;
    securityPin;
    loyalPoints = 0;
    constructor(name, initialDeposit, pin) {
        this.holderName = name;
        this.balance = initialDeposit;
        this.securityPin = pin;
    }
    withdrawMoney(amount, pin) {
        if (this.verifyPin(pin)) {
            if (this.balance >= amount) {
                this.balance -= amount;
                console.log(`Amount: ${amount} withdrawn successfully .Remaining Balance: ${this.balance}`);
            }
            else {
                console.log("Inadequate funds in  your wallet!");
            }
        }
        else {
            console.log('Incorrect Pin!Transaction declined.');
        }
    }
    verifyPin(enteredPin) {
        return this.securityPin === enteredPin;
    }
}
class PremiumWallet extends DigitalWallet {
    addBonus() {
        this.loyalPoints += 100;
        console.log(`Bonus added!Total points: ${this.loyalPoints}`);
    }
}
const myWallet = new DigitalWallet("Vishnu", 5000, 1234);
console.log(`Welcome, ${myWallet.holderName}!`);
myWallet.withdrawMoney(100, 1234);
