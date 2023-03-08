import fs  from "fs";
import { Words } from "./Palabras";
import { WordList } from "./arregloPalabras";

// trabajando la clase Words

const word_1:Words=new Words("Julia",10);
const word_2:Words=new Words("Manuel",6);
const word_3:Words=new Words("Roma",0);
const word_4:Words=new Words("Nadia",38);
const word_5:Words=new Words("Emiliano",38);
const word_6:Words=new Words("Sofia",12);
const word_7:Words=new Words("Figaro",5);
const word_8:Words=new Words("Abuela",56);
const word_9:Words=new Words("Abuelo",58);
const word_10:Words=new Words("Tios",31);
const word_11:Words=new Words("Primos",18);

const listPalabras=[word_1,word_2,word_3,word_4,word_5,word_6,word_7,word_8,word_9,word_10,word_11];

const archiveToJson=JSON.stringify(listPalabras);
fs.writeFileSync(`./arrayFunctions.json`,archiveToJson,`utf8`);


///////////////////////////////////////////////////////////////////////

const getData=fs.readFileSync(`./arrayFunctions.json`,`utf8`);
const listadoPalabras=JSON.parse(getData);

const workListWord:WordList=new WordList();
const word_12:Words=new  Words(`Michael`,52);
//workListWord.insertarTexto(word_12,listadoPalabras);
//workListWord.eliminarTexto(`Emiliano`,listadoPalabras);
console.table(workListWord.buscarTexto(`Emi`,listadoPalabras));

