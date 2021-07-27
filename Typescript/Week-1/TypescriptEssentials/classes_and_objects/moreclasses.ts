// what goes into a class?
// properties
// constructor



export class Checking {
    private _fname!: string;
    private _lname!: string;
    private _age!: number;
    private _balance: number = 0;

    constructor(public title: string, private id: number) {
        this.title = title;
        this.id = id;
    }
    
    get balance() {
        return this._balance;
    }

    set balance(val: number) {
        this._balance = val;
    }

    // for functions, you dont put the word function.
    deposit(amount: number){
        this.balance += amount;
    }

    withdraw(amount: number) {
        this.balance -= amount;
    }

    // get block is used to retrieve property data
    get age() {
        return this._age;
    }

    // set block is used to assign data to the backing field.
    set age(value: number) {
        if (value > 0) {
            this._age = value;
        }
    }
}

