/* Ejercicio 3
Implementar la clase Matriz. En vez de consultar los valores con los corchetes, 
se debe hacer (desde afuera) a través de un método → get(x, y) */

import { arch } from "os";

export class Matrix {
  private elementXaxis: number;
  private elementYaxis: number;
  private arregloMatriz:number[][];
  constructor(elementXaxis: number, elementYaxis: number,arregloMatriz?:number[][]) {
    this.elementXaxis = elementXaxis;
    this.elementYaxis = elementYaxis;
    arregloMatriz ? (this.arregloMatriz=arregloMatriz):(this.arregloMatriz=[])
  }
  createMatrix(): number[][] {
    for (let i = 0; i < this.elementXaxis; i++) {
      for (let j = 0; j < this.elementYaxis; j++) {
        this.arregloMatriz[i][j] = Math.floor(Math.random() * (100 - 1) + 1);
      }
    }
    return this.arregloMatriz;
  }
  /* showMatrix():void{
    let mostrarMatriz:number[][]=[];
    for (let i = 0; i < this.elementXaxis; i++) {
      for (let j = 0; j < this.elementYaxis; j++) {
        mostrarMatriz=this.arregloMatriz[i][j]
      }
      console.log(mostrarMatriz);
      
    }


  } */
}

const matrix_ejemplo: Matrix = new Matrix(5, 6);
matrix_ejemplo.createMatrix();
console.table(matrix_ejemplo.createMatrix());

//EJERCICIO SIN TERMINAR