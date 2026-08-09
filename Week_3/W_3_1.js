"use strict";
//Class Implementations with Constructors
class FixedDeposit {
    customerName;
    principalAmount;
    interestRate;
    tenure;
    constructor(name, amount, rate, years) {
        this.customerName = name;
        this.principalAmount = amount;
        this.interestRate = rate ?? 6.5;
        this.tenure = years ?? 5;
    }
    calculateMaturity() {
        const interest = (this.principalAmount * this.interestRate * this.tenure) / 100;
        return this.principalAmount + interest;
    }
    displayDetails() {
        console.log(`FD Reciepts`);
        console.log(`Customer: ${this.customerName}`);
        console.log(`Principal Amount: ${this.principalAmount}`);
        -console.log(`Interest Rate: ${this.interestRate}%`);
        console.log(`Tenure: ${this.tenure} years`);
        console.log(`Maturity Amount: ${this.calculateMaturity()}`);
    }
}
const standardFD = new FixedDeposit("Vishnu", 100000);
const seniorCitizenFD = new FixedDeposit("Likitha", 200000, 7.5, 10);
standardFD.displayDetails();
seniorCitizenFD.displayDetails();
seniorCitizenFD.principalAmount = 10000000;
console.log(`Updated Maturity Amount for ${seniorCitizenFD.customerName}: ${seniorCitizenFD.calculateMaturity()}`);
