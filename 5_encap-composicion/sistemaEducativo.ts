/* Ejercicio 1
Aplicar lo visto hasta esta clase para modelar un 
sistema educativo donde:
• Los profesores deben tener un listado de sus alumnos.
• Cada alumno debe saber su nota e informar 
si está aprobado o no (es decir si la nota es mayor que 7). 
• La escuela debe tener un registro de los alumnos y maestros, y debe poder 
matricular/contratar y expulsar/despedir a los mismos. */

//Sistema Educativo -> Escuelas -> Docentes -> Alumnos

import * as fs from "fs";
import { Alumnos } from "./alumnos";
import { Docentes } from "./docentes";
import { Escuela } from "./escuela";

// instanciamos de clase alumnos para generar un .JSON

const alumno_1: Alumnos = new Alumnos(`Emiliano`, `Salazar`);
const alumno_2: Alumnos = new Alumnos(`Jose`, `Miguelez`);
const alumno_3: Alumnos = new Alumnos(`Pedro`, `Lopez`);
const alumno_4: Alumnos = new Alumnos(`Santiago`, `Menna`);
const alumno_5: Alumnos = new Alumnos(`Paloma`, `Blanco`);
const alumno_6: Alumnos = new Alumnos(`Andres`, `Bokser`);
const alumno_7: Alumnos = new Alumnos(`Michael`, `Martinez`);
const alumno_8: Alumnos = new Alumnos(`Juan`, `Rodriguez`);
const alumno_9: Alumnos = new Alumnos(`Miguel`, `Perez`);
const alumno_10: Alumnos = new Alumnos(`Gonzalo`, `Gonzalez`);
const alumno_11: Alumnos = new Alumnos(`Nadia`, `Cacciato`);
const alumno_12: Alumnos = new Alumnos(`Julia`, `Salazar`);
const alumno_13: Alumnos = new Alumnos(`Manuel`, `Salazar`);
const alumno_14: Alumnos = new Alumnos(`Roma`, `Salazar`);

const listAlumnos = [
  alumno_1,
  alumno_2,
  alumno_3,
  alumno_4,
  alumno_5,
  alumno_6,
  alumno_7,
  alumno_8,
  alumno_9,
  alumno_10,
  alumno_11,
  alumno_12,
  alumno_13,
  alumno_14,
];
const archiveAlumnos = JSON.stringify(listAlumnos);

fs.writeFileSync(`./data_base/listadoAlumnos.json`, archiveAlumnos, `utf8`);

// instanciamos de clase docentes para generar un .JSON

const docente_1: Alumnos = new Alumnos(`Maria`, `Flores`);
const docente_2: Alumnos = new Alumnos(`Silvia`, `Miguelez`);
const docente_3: Alumnos = new Alumnos(`Marily`, `Lopez`);
const docente_4: Alumnos = new Alumnos(`Paola`, `Menna`);

const listDocentes = [docente_1, docente_2, docente_3, docente_4];
const archiveDocentes = JSON.stringify(listDocentes);

fs.writeFileSync(`./data_base/listadoDocentes.json`, archiveDocentes, `utf8`);

// ------------------------------------------------------------- //

const listadoAlumnos = fs.readFileSync(
  `./data_base/listadoAlumnos.json`,
  `utf8`
);
const listadoDocentes = fs.readFileSync(
  `./data_base/listadoDocentes.json`,
  `utf8`
);

const docente_5: Docentes = new Docentes(`Emilia`, `Paredes`);
docente_5.mostrarListado(listAlumnos);
console.table(docente_5.mostrarListado(listAlumnos));
console.table(docente_5.mostrarListado(listDocentes));
console.log(docente_5);


alumno_14.showNotes();
console.log(alumno_14.showNotes());
