"use strict";
/* • Instalar paquete → npm install @types/node
• Crear archivo ‘abc.txt’• Escribir adentro ‘hola como andas todo bien’ */
exports.__esModule = true;
var fs = require("fs");
var words = fs.readFileSync("abc.txt", "utf-8");
var text = words.split(" ");
console.log(text);
