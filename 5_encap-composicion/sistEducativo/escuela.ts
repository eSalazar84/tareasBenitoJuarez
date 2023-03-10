import { Alumnos } from "./alumnos";
import { Docentes } from "./docentes";

export class Escuela {
  protected file:number[];
  constructor() {
    this.file = [Math.floor(Math.random() * (9999 - 1000) + 1000)];
  }  
  
  mostrarListado(array: Alumnos[] | Docentes[]): any[] {
    return array;
  }
}

