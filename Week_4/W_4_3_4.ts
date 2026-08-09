interface Lengthwise{
    length:number;
}
function printLength<T extends Lengthwise>(item:T):number{
    return item.length;
}
printLength("TypeScript");
printLength([1,2,3]);