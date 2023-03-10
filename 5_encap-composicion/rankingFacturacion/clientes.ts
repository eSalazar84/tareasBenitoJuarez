export class Clientes {
  private company: string;
  private billing: number;
  constructor(company: string, billing?: number) {
    this.company = company;
    billing
      ? (this.billing = billing)
      : (this.billing = Math.floor(Math.random() * (500000 - 200000) + 200000));
  }
}
