import { Ticket } from './W_4_1_3.js';
const traveler = {
    name: "Samay Raina",
    age: 45,
    berthPreference: "Lower"
};
const myTicket = new Ticket(traveler, 500, 12345);
myTicket.printTicket();
