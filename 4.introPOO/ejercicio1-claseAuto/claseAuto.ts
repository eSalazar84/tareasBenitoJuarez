/* Ejercicio 2
Plantear una clase Auto de la forma en que se vió 
en la clase → especificando variables internas y métodos
Implementar en TypeScript*/

class Auto {
  // estado de la clase: variables
  private currentSpeed: number = 0;
  private isOn: boolean = false;
  private fuelLevel: number = 30;
  private isEmpty: boolean = false;
  private stopCar: string = `El auto se detuvo`;
  // constructor de la clase
  constructor (inicialFuel:number){
    this.fuelLevel= inicialFuel;
  }
  // funcionalidades de la clase: funciones
  speedUp(): void {
    this.currentSpeed++;
  }
  speedDown(): void {
    this.currentSpeed--;
  }
  private stopedCar(): string | void {
    if (this.currentSpeed > 0) this.currentSpeed--;
    console.log(`El auto se detuvo`);
  }
}

const peugeot: Auto = new Auto(40);
peugeot.speedUp();
console.log(peugeot.speedUp(), `subo 1`);
peugeot.speedUp();
console.log(peugeot.speedUp(), `subo 2`);
peugeot.speedUp();
console.log(peugeot.speedUp(), `subo 3`);
peugeot.speedUp();
console.log(peugeot.speedUp(), `subo 4`);
peugeot.speedDown();
console.log(peugeot.speedDown(), `bajo 3`);
peugeot.speedDown();
console.log(peugeot.speedDown(), `bajo 2`);
peugeot.speedDown();
console.log(peugeot.speedDown(), `bajo 1`);
peugeot.speedDown();
console.log(peugeot.speedDown(), `bajo 1`);
peugeot.speedDown();
console.log(peugeot.speedDown(), `bajo 1`);
peugeot.speedDown();
console.log(peugeot.speedDown(), `bajo 1`);
