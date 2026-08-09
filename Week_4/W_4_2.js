"use strict";
//NameSapces
var GovernmentID;
(function (GovernmentID) {
    const AadharLength = 12;
    function validateAadhar(id) {
        const isNumeric = /^\+$/.test(id);
        return isNumeric && id.length === AadharLength;
    }
    GovernmentID.validateAadhar = validateAadhar;
    function validatePAN(pan) {
        const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        return panRegex.test(pan.toUpperCase());
    }
    GovernmentID.validatePAN = validatePAN;
    let Tax;
    (function (Tax) {
        function calculateGST(amount) {
            return amount * 0.18;
        }
        Tax.calculateGST = calculateGST;
    })(Tax = GovernmentID.Tax || (GovernmentID.Tax = {}));
})(GovernmentID || (GovernmentID = {}));
const myAadhar = "123456789120";
const myPAN = "ABSCR1234F";
console.log(`is Aadhar valid? ${GovernmentID.validateAadhar(myAadhar)}`);
console.log(`is PAN Valid? ${GovernmentID.validatePAN(myPAN)}`);
const billAmount = 1000;
const tax = GovernmentID.Tax.calculateGST(billAmount);
console.log(`GST on ${billAmount} is ${tax}`);
