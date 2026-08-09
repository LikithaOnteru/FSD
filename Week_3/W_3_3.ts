class BankBranch{
    public static readonly bankName:string="SBI Bank";
    public static totalAccounts:number=0;
    public readonly accountNumber:string;
    public accountHolder:string;
    constructor(accountNumber:string,accountHolder:string){
        this.accountNumber=accountNumber;
        this.accountHolder=accountHolder;
        BankBranch.totalAccounts++;
    }
    public static getBankPolicy():void{
        console.log(`Welcome to ${this.bankName}. All FDs are subject to market risks.`);
    }
    public showAccount():void{
        console.log(`Holder: ${this.accountHolder}`);
        console.log(`Account Number: ${this.accountNumber}`);
    }
}
    console.log(BankBranch.bankName);
    BankBranch.getBankPolicy();
    const user1=new BankBranch("Samay Raina","SBI0000123");
    const user2=new BankBranch("Vishnu","SBI0000456");
    user1.showAccount();
    user2.showAccount();