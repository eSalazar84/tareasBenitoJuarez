const readlineSync=require(`readline-sync`);
const saludo=`Bienvenido a la calculadora de Triangulos`
console.log(saludo);
const base=readlineSync.question(`Indique la base del triangulo: `)
const altura=readlineSync.question(`Indique la altura del triangulo: `);
const triangulo=(base*altura)/2;
console.log(`El area del triangulo de base ${base}cm y altura ${altura}cm es de ${triangulo}cm2`);