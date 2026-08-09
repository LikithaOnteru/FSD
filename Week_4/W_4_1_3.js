import { GST_RATE, CONVENIENCE_FEE } from "./W_4_1_1.js";
export class Ticket {
    passenger;
    baseFare;
    TrainNumber;
    constructor(passenger, baseFare, TrainNumber) {
        this.passenger = passenger;
        this.baseFare = baseFare;
        this.TrainNumber = TrainNumber;
    }
    calculateTotalFare() {
        const taxAmount = this.baseFare * GST_RATE;
        return this.baseFare + taxAmount + CONVENIENCE_FEE;
    }
    printTicket() {
        console.log(`-----E-Ticket Confrimed---`);
        console.log(`Passeneger: ${this.passenger.name}(${this.passenger.age} years)`);
        console.log(`Train Number: ${this.TrainNumber}`);
        console.log(`Total Fare: ${this.calculateTotalFare()}`);
        console.log(`----------------------`);
    }
}
