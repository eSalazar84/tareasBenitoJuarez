/* • Instalar paquete → npm install @types/node
• Crear archivo ‘abc.txt’• Escribir adentro ‘hola como andas todo bien’ */

import * as fs from "fs"

const words:string= fs.readFileSync(`abc.txt`,`utf-8`);

const text:string[]=words.split(` `);

console.log(text);
