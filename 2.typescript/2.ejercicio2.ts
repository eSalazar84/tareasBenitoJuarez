/* Definir funciones (con todos los tipos necesarios) para hacer lo siguiente:
Cargar un listado de palabras (por esta vez, usar el arreglo como variable global)
Insertar/eliminar/buscar/actualizar una palabra del listado */

import * as fs from "fs";

const phrase: string = fs.readFileSync(`abc.txt`, `utf-8`);

const words: string[] = phrase.split(` `);

function insert(text: string): string[] {
  words.push(text);
  return words;
}

function isWord(text: string): boolean {
  if (words.includes(text)) {
    return true;
  } else {
    return false;
  }
}

function deleted(text: string): string[] {
  if (words.includes(text) === true) {
    words.pop();
    return words;
  } else {
    return words;
  }
}


