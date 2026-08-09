function identity<T>(value:T):T{
    return value;
}
console.log(identity<number>(10));
console.log(identity<string>("Hello"));