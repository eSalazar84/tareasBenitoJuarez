import { Clientes } from "./clientes";

export class Facturación extends Clientes {
  constructor(company: string, billing?: number) {
    super(company, billing);
  }
}
