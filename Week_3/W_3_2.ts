class DigitalWallet{
    public  holderName:string;
    private balance:number;
    private securityPin:number;
    protected loyalPoints:number=0;
    constructor(name:string,initialDeposit:number,pin:number){
        this.holderName=name;
        this.balance=initialDeposit;
        this.securityPin=pin;
    }
    public withdrawMoney(amount:number,pin:number):void{
        if(this.verifyPin(pin)){
            if(this.balance>=amount){
            this.balance-=amount;
            console.log(`Amount: ${amount} withdrawn successfully .Remaining Balance: ${this.balance}`);
        }else{
            console.log("Inadequate funds in  your wallet!");
        }
    }else{
        console.log('Incorrect Pin!Transaction declined.');
    }
}
private verifyPin(enteredPin:number):boolean{
    return this.securityPin===enteredPin;
}
}
class PremiumWallet extends DigitalWallet{
    public addBonus():void{
        this.loyalPoints+=100;
        console.log(`Bonus added!Total points: ${this.loyalPoints}`);
    }
}
const myWallet=new DigitalWallet("Vishnu",5000,1234);
console.log(`Welcome, ${myWallet.holderName}!`);
myWallet.withdrawMoney(100,1234);
