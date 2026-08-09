function getFirstPackage<T>(items:T[]):T{
    return items[0];
}
function wrapBox<T>(item:T):{parcel:T;timestamp:Date}{
    return {
        parcel:item,
        timestamp:new Date()
    };
}
const cities=["Mumbai","Delhi","Bangalore"];
const firstCity=getFirstPackage<string>(cities);
console.log(`Sending first parcel to ${firstCity.toUpperCase()}`);

const pincodes=[400001,110001,560001];
const firstPin =getFirstPackage<number>(pincodes);
console.log(`Starting delievery at Pincode: ${firstPin}`);

interface Electronic{
    brand:string;
    model:string;
}
const phone:Electronic={brand:"Apple",model:"iPhone 15"};
const packedPhone=wrapBox<Electronic>(phone);
console.log(`Packed item : ${packedPhone.parcel.brand} of ${packedPhone.parcel.model} at ${packedPhone.timestamp}`);
const autoCity=getFirstPackage(cities);
