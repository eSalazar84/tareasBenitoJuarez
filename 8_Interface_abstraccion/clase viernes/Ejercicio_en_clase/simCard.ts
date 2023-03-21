export class SimCard{
    private carrier:string;
    private number:number;
    constructor(carrier:string,number:number){
        this.carrier=carrier;
        this.number=number;
    }
    getInfo():string{
        return `
        ${this.carrier}
        ${this.number}
        `
    }
}

