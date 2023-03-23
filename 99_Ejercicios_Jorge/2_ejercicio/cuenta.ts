/* 
EJERCICIO 2
Crea una clase llamada Cuenta que tendrá los siguientes atributos: titular (que es una
persona) y cantidad (puede tener decimales). El titular será obligatorio y la cantidad es
opcional. Crear los siguientes métodos para la clase:
• Un constructor, donde los datos pueden estar vacíos.
• Los setters y getters para cada uno de los atributos. El atributo no se puede modificar
directamente, sólo ingresando o retirando dinero.
• mostrar(): Muestra los datos de la cuenta.
• ingresar(cantidad): se ingresa una cantidad a la cuenta, si la cantidad introducida es
negativa, no se hará nada.
• retirar(cantidad): se retira una cantidad a la cuenta. La cuenta puede estar en números
rojos.
*/

export class Cuenta {
  private titular: string;
  private cantidad: number;
  private accum:number;
  constructor(titular: string, cantidad?: number) {
    this.titular = titular;
    cantidad
      ? (this.cantidad = cantidad)
      : (this.cantidad = Math.floor(Math.random() * (10000 - 0) + 0));
    this.accum=0;
  }
  getCantidad(cantidad:number):string{
    return cantidad.toFixed(2)
  }
  getInfo(): string {
    return `
        Titular de la cuenta:....${this.titular}
        Saldo :................. $${this.getCantidad(this.cantidad)}.-
        `;
  }
  setInsertAmount(cantidad: number):string {
   
    if (cantidad >= 0) {
      this.accum=cantidad+this.cantidad
      return `
          Titular de la cuenta:....${this.titular}
          Saldo :................. $${this.getCantidad(this.accum)}.-      
      `
    } else {
      return `Ha ingresado mal el importe, intente nuevamente.`
    }
  }
  setWithDrawMoney(cantidad: number):string {
    this.accum=this.cantidad-cantidad
      return `
          Titular de la cuenta:....${this.titular}
          Saldo :................. $${this.getCantidad(this.accum)}.-      
      `
  }
}
