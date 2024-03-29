export class Battery{
    private capacity:number;
    private make: string;
    private model: string;
    constructor(capacity:number,make:string,model:string){
        this.capacity=capacity;
        this.make=make;
        this.model=model;
    }
    getInfo():string{
        return `
        ${this.capacity}
        ${this.make}
        ${this.model}
        `
    }
}