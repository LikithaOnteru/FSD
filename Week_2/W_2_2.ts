//Arrow Functions
function calculateTotal(price:number,tax:number):number{
    return price +(price*tax);
}
const calculateArrow=(price:number,tax:number):number=>{
    return price+(price*tax);
}
const getWelcome=(theatre:string):string=>`Welcome to ${theatre} Cinemas!`;
const ticketPrice:number=250;
const gstRate:number=0.18;
console.log(getWelcome("PVR"));
const total1=calculateTotal(ticketPrice,gstRate);
console.log(`Total Ticket Price: ${total1}`);
const total2=calculateArrow(ticketPrice,gstRate);
console.log(`Total Ticket Price using Arrow Function: ${total2}`);
