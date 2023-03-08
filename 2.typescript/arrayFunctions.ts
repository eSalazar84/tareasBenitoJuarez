/* Definir funciones (con todos los tipos necesarios) para hacer lo siguiente:
Cargar un listado de palabras (por esta vez, usar el arreglo como variable global)
Insertar/eliminar/buscar/actualizar una palabra del listado */

import { Words } from "./list";

export class WordList {
  /* insert(palabra: string[]): string[] {
    palabra.push(text);
    return ;
  } */
  search(text: string, listado: string[]) {
    const prueba = listado.find(());
    console.log(prueba);
    
    /* if (listadoPalabras.find(this.text) === text) {
      return `${text} figura en el array`;
    } else {
      return `${text} NO figura en el array`;
    } */
  }
  /* deleted(text: string): string[] {
    listadoPalabras.pop();
    return listadoPalabras;
  } */
}