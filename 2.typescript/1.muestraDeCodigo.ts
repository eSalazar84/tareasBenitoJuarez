/* En una prueba, un piloto tiene que completar 4 vueltas
Se necesita un programa que permita ingresar por teclado el tiempo de cada vuelta
El programa debe retornar el tiempo total y el promedio de vuelta */

//import * as fs from `fs`;

const readlineSync=require(`readline-sync`);

function countingLaps():string{
    let timeLap:number=0;
    let timeTotal:number=0;
    const laps:number=readlineSync.question(`Cuantas vueltas dio el vehiculo?: `);    
    for (let index = 0; index < laps; index++) {
        timeLap=Number(readlineSync.question(`Ingrese el tiempo que tardo en dar la ${index+1}° vuelta: `));   
        timeTotal+=timeLap;
    }
    const averageTime:number=timeTotal/Number(laps);
    return `El tiempo total de las ${laps} vueltas fue de ${timeTotal}min y la media por vuelta fue de ${averageTime}min`
}

console.log(countingLaps());
