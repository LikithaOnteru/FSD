"use strict";
//Parameter & Return Types
function greet(name) {
    return `Namaste, ${name}!`;
}
//Default Parameter(=)
function getLocation(city = "Hyderabad") {
    return `Location: ${city}`;
}
//Optional Parameter(?)
function sendAlert(PhNumber, message) {
    console.log(`Sending SMS to ${PhNumber}...`);
    if (message) {
        console.log(`Content: ${message}`);
    }
}
//Rest Parameter(using...)
function scores(...score) {
    return score.reduce((total, current) => total + current, 0);
}
//Experiment Outputs
console.log(greet("Vishnu"));
//console.log(greet(1));
console.log(getLocation("Bhimavaram"));
console.log(getLocation());
sendAlert(1234567890, "Hello, Vishnu!");
sendAlert(1234567890);
const total = scores(85, 90, 78, 92);
console.log(`Total Score: ${total}`);
