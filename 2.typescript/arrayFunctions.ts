/* Definir funciones (con todos los tipos necesarios) para hacer lo siguiente:
Cargar un listado de palabras (por esta vez, usar el arreglo como variable global)
Insertar/eliminar/buscar/actualizar una palabra del listado */

import * as fs from "fs";


const listadoPalabras: string[] = [
  `Hola`,
  `como`,
  `andas`,
  `todo`,
  `bien`,
  `por`,
  `aca`,
  `che?`,
];

function insert(text: string): string[] {
  listadoPalabras.push(text);
  return listadoPalabras;
}

function search(text: string, array: string[]): string | undefined {
    array.find((palabra)=>palabra.text ===text)
  if (listadoPalabras.find(this.text) === text) {
    return `${text} figura en el array`;
  } else {
    return `${text} NO figura en el array`;
  }
}

function deleted(text: string): string[] {
  listadoPalabras.pop();
  return listadoPalabras;
}

console.log(search(`todo`));
