"use strict";
let flexibleValue = 10;
flexibleValue = "Now I am a String";
flexibleValue = true;
let mysteryValue = "Hello Vishnu";
if (typeof mysteryValue === "string") {
    console.log("Length of unknown string:" + mysteryValue.length);
}
function logNotification(message) {
    console.log("ALERT:" + message);
}
logNotification("Environment Setup Complete!");
