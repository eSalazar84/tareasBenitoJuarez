import { SimCard } from "./simCard";
import { Battery } from "./battery";


export class CellPhone {
  private make: string;
  private model: string;
  private simCard:SimCard[];
  private battery:Battery;
  constructor(make: string, model: string,battery:Battery) {
    this.make = make;
    this.model = model;
    this.battery=battery;
    this.simCard=[]
  }
  getInfo(): string {
    return `
        ${this.make}
        ${this.model}
        ${this.battery}
        `;
  }
  setSimCard(simCard: SimCard) {
    this.simCard.push(simCard)
  }
}


