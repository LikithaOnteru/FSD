"use strict";
class BankBranch {
    static bankName = "SBI Bank";
    static totalAccounts = 0;
    accountNumber;
    accountHolder;
    constructor(accountNumber, accountHolder) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        BankBranch.totalAccounts++;
    }
    static getBankPolicy() {
        console.log(`Welcome to ${this.bankName}. All FDs are subject to market risks.`);
    }
    showAccount() {
        console.log(`Holder: ${this.accountHolder}`);
        console.log(`Account Number: ${this.accountNumber}`);
    }
}
console.log(BankBranch.bankName);
BankBranch.getBankPolicy();
const user1 = new BankBranch("Samay Raina", "SBI0000123");
const user2 = new BankBranch("Vishnu", "SBI0000456");
user1.showAccount();
user2.showAccount();
