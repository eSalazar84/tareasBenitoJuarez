export class Alumnos {
  private name: string;
  protected lastName: string;
  protected tipo: string;
  public age: number;
  constructor(name: string, lastname: string, age?: number,file?:number) {
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
