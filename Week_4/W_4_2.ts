//NameSapces
namespace GovernmentID{
     const AadharLength=12;
     export function validateAadhar(id:string):boolean{ 
        const isNumeric=/^\+$/.test(id);
        return isNumeric &&id.length===AadharLength;
}
export function validatePAN(pan:string):boolean{
    const panRegex=/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return panRegex.test(pan.toUpperCase());
}
export namespace Tax{
    export function calculateGST(amount:number):number{
        return amount*0.18;
    }
}
}
const myAadhar="123456789120";
const myPAN="ABSCR1234F"
console.log(`is Aadhar valid? ${GovernmentID.validateAadhar(myAadhar)}`);
console.log(`is PAN Valid? ${GovernmentID.validatePAN(myPAN)}`);
const billAmount=1000;
const tax=GovernmentID.Tax.calculateGST(billAmount);
console.log(`GST on ${billAmount} is ${tax}`);