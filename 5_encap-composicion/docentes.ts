import { Alumnos } from "./alumnos";

export class Docentes extends Alumnos {
  constructor(name: string, lastname: string, age?: number) {
    super(name, lastname, age);
    this.tipo = `Docente`;
    this.age = Math.floor(Math.random() * (45 - 22) + 22);
  }
  mostrarListado(listadoAlumnos: Alumnos[]): Alumnos[] {
    console.log(`Listado de Alumnos:`);
    return listadoAlumnos;
  }
  asignarAlumnos(listadoAlumnos: Alumnos[], age: number): any {
    console.log(`La docente ${this.lastName} tiene a cargo los alumnos mayores a ${age} años`);
    
    const alumnosAsignados = listadoAlumnos.filter((alumno) => alumno.age > age);
    return alumnosAsignados;
  }
}
