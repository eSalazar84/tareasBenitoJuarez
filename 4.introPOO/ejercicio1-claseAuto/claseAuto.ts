/* Ejercicio 2
Plantear una clase Auto de la forma en que se vió 
en la clase → especificando variables internas y métodos
Implementar en TypeScript*/

class Auto {
  // estado de la clase: variables
  private currentSpeed: number = 0;
  private isOn: boolean = false;
  private brand: string;
  private fuel: number = 20;
  private stopCar: string = `Auto detenido`;
  private speedLimit: string = `¡Alerta de velocidad!`;
  // constructor de la clase
  constructor(brand?: string) {
    brand ? (this.brand = brand) : (this.brand = `Generic`);
    this.fuel = 3;
  }
  // funcionalidades de la clase: funciones
  switchOnOff(): void {
    this.isOn != this.isOn;
    console.log(`${this.brand} Car on, check system, ${this.fuel}% fuel`);
  }
  showSpeed(): number {
    return this.currentSpeed;
  }
  speedUp(): void {
    if (this.currentSpeed < 100 && this.fuel > 1) {
      this.currentSpeed++;
      this.fuel--;
      console.log(`${this.showSpeed()}km/h`);
    } else {
      this.currentSpeed++;
      this.fuel--;
      console.log(`${this.showSpeed()}km/h ${this.speedLimit}`);
    }
  }
  speedDown(): void {
    if (this.currentSpeed > 1 && this.fuel > 1) {
      this.currentSpeed--;
      this.fuel--;
      console.log(`${this.showSpeed()}km/h`);
    } else {
      console.log(this.stopCar);
    }
    if (this.currentSpeed > 100) {
      console.log(`${this.showSpeed()}km/h ${this.speedLimit}`);
    }
  }
}

const peugeot: Auto = new Auto(`Peugeot`);
peugeot.switchOnOff();
peugeot.speedUp();
peugeot.speedUp();
peugeot.speedUp();
peugeot.speedUp();
peugeot.speedDown();
peugeot.speedDown();
peugeot.speedDown();
peugeot.speedDown();
peugeot.speedDown();
