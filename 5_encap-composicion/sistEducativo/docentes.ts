import { Alumnos } from "./alumnos";

export class Docentes extends Alumnos {
  constructor(name: string, lastname: string, age?: number,file?:number) {
    super(name, lastname, age);
    this.tipo = `Docente`;
    this.age = Math.floor(Math.random() * (45 - 22) + 22);
  }
  asignarAlumnos(listadoAlumnos: Alumnos[], age: number): any {
    console.log(`La docente ${this.lastName} tiene a cargo los alumnos mayores a ${age} años`);    
    const alumnosAsignados = listadoAlumnos.filter((alumno) => alumno.age > age);
    return alumnosAsignados;
  }
}

const docente23424=new Docentes(`sadfsd`,`asfasdf`)
console.log(docente23424);

