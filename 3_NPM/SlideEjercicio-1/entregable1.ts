/* Crear proyecto NPM
Editar el ejercicio de la suma los elementos de un arreglo, inicializando el mismo con un archivo .txt
Subir a GitHub y pasar el link por Slack */

import * as fs from "fs";

const arraySum = require(`array-sum`);
const archivoArreglo: string = fs.readFileSync(`./entregable1.txt`, `utf-8`);

function sumaArray():number{
    const arregloTipoString: string[] = archivoArreglo.split(` `);
    const arregloTipoNumber:number= Number(arraySum(arregloTipoString));
    return arregloTipoNumber;
}
console.log(`${sumaArray()} es la suma del arreglo que nos llega del archivo .txt`);