/* Definir funciones (con todos los tipos necesarios) para hacer lo siguiente:
Cargar un listado de palabras (por esta vez, usar el arreglo como variable global)
Insertar/eliminar/buscar/actualizar una palabra del listado */
var listadoPalabras = [
    "Hola",
    "como",
    "andas",
    "todo",
    "bien",
    "por",
    "aca",
    "che?",
];
function insert(text) {
    listadoPalabras.push(text);
    return listadoPalabras;
}
function search(text) {
    let palabraEncontrada=listadoPalabras.find((this.text) === text)
    if (palabraEncontrada) {
        return "".concat(text, " figura en el array");
    }
    else {
        return "".concat(text, " NO figura en el array");
    }
}
function deleted(text) {
    listadoPalabras.pop();
    return listadoPalabras;
}
console.log(search("todo"));
