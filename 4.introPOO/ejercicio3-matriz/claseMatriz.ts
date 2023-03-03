/* Ejercicio 3
Implementar la clase Matriz. En vez de consultar los valores con los corchetes, 
se debe hacer (desde afuera) a través de un método → get(x, y) */

export class Matrix {
  private elementXaxis: number;
  private elementYaxis: number;
  constructor(elementXaxis: number, elementYaxis: number,) {
    this.elementXaxis = elementXaxis;
    this.elementYaxis = elementYaxis;
  }
  showMatrix(): number[][] {
    const arregloMatriz: number[][]= [];
    for (let i = 0; i < this.elementXaxis; i++) {
      for (let j = 0; j < this.elementYaxis; j++) {
        arregloMatriz[i][j] = Math.floor(Math.random() * (100 - 1) + 1);
        console.table(arregloMatriz[i][j]);
      }
    }
    return arregloMatriz;
  }
}

const matrix_ejemplo: Matrix = new Matrix(5, 6);
matrix_ejemplo.showMatrix();
