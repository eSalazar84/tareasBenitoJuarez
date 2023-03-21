// clases abstractas es una lista de tareas y las cuestiones que son repetitivas ya estan ingresadas
// Interfaces es una caracteristica de seguridad, ya que se lo que va a tener
// son contratos que las clases deben respetar. Los miembros datos son PUBLIC por defecto. OJO: esto rompe el
// encapsulamiento. Podemos tener interfases sin props, solo con metodos.
// Sirve como documentacion del proyecto.


function data(date:Date):string {
    return date.toLocaleDateString("es-Ar")
}

console.log(data(new Date("5/5/2000")));
