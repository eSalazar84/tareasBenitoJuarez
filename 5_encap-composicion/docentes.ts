import { Alumnos } from "./alumnos";

export class Docentes extends Alumnos {
  constructor(name: string, lastname: string, age?: number) {
    super(name, lastname, age);
    this.tipo = `Docente`;
    this.age = Math.floor(Math.random() * (45 - 22) + 22);
  }
  mostrarListado(listadoAlumnos: Alumnos[]): Alumnos[] {
    return listadoAlumnos;
  }
}
