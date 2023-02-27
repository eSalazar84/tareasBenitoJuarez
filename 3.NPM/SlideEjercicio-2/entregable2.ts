/* Crear Proyecto NPM
Buscar en la página alguna dependencia e instalarla (además de readline-sync)
Desarrollar alguna funcionalidad que utilice la dependencia instalada
Crear dos archivos con funcionalidades diferentes
Cada uno utilizando una librería diferente, sin contar readline-sync
Definir las tareas asociadas y ejecutarlas
Subir proyecto a GitHub y pasar link por Slack */

import * as fs from "fs";
const countWordsArray=require(`count-words-array`);
const archive=fs.readFileSync(`./entregable2.txt`, `utf-8`);

console.log(countWordsArray(archive, true));

// Ejercicio incompleto por no comprender el enunciado