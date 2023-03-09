/* Definir funciones (con todos los tipos necesarios) para hacer lo siguiente:
Cargar un listado de palabras (por esta vez, usar el arreglo como variable global)
Insertar/eliminar/buscar/actualizar una palabra del listado */

import { Words } from "./Palabras";

export class WordList {
  private listado: string[]=[]
  constructor(){
    this.listado=[];
  }
  insertarTexto(nuevoTexto: Words, listado: Words[]): Words[] {
    if (listado.push(nuevoTexto)) {
      console.log(
        `Se ha añadido ${nuevoTexto.texto} a la base de datos. La base de datos del Registro queda de la siguiente forma:`
      );
      return listado;
    } else {
      console.log(
        `El libro ${nuevoTexto.texto} no se ha podido añadir a la biblioteca`
      );
      return listado;
    }
  }
  eliminarAuto(textoEnArray: string, listado: Words[]): Words[] {
    let indexListTexto: number = listado.findIndex(
      (listado) => listado.texto == textoEnArray
    );
    if (indexListTexto >= 0) {
      listado.splice(indexListTexto, 1);
      console.log(`Auto eliminado del Registro: ${textoEnArray}`);
      return listado;
    } else {
      console.log(`El auto ${textoEnArray} no ha sido eliminado`);
      return listado;
    }
  }
  buscarTexto(textoEnArray: string, listado: Words[]): any {
    const busqueda = listado.find((listado) => listado.texto === textoEnArray);
    if (busqueda){;
      return busqueda;      
    } else{
      return `No se han hecho modificaciones en el listado`;
    };    
  }
}

/* search(text: string, listado: string[]) {
    const prueba = listado.find(texto=>texto === text);
    console.log(prueba);
    console.log(typeof prueba); 
    
    
    if (listadoPalabras.find(this.text) === text) {
      return `${text} figura en el array`;
    } else {
      return `${text} NO figura en el array`;
    }
  }
  deleted(text: string): string[] {
    listadoPalabras.pop();
    return listadoPalabras;
  } */
