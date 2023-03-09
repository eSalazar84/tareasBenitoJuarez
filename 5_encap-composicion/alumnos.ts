export class Alumnos {
  name: string;
  lastName: string;
  tipo: string;
  age: number;
  constructor(name: string, lastname: string, age?: number) {
    this.name = name;
    this.lastName = lastname;
    age
      ? (this.age = age)
      : (this.age = Math.floor(Math.random() * (18 - 12) + 12));
    this.tipo = `Alumno`;
  }
  showNotes(): string {
    const notas = Math.floor(Math.random() * (10 - 1) + 1);
    if (notas >= 7) {
      return `La nota del alumno ${
        (this.name, this.lastName)
      } fue un ${notas}. Por lo tanto estas aprobado.`;
    } else {
      return `La nota del alumno ${
        (this.name, this.lastName)
      } fue un ${notas}. Por lo tanto estas desaprobado.`;
    }
  }
}