/* 
Ejercicios - En Clase
• Crear proyecto NPM
• Subir proyecto a GitHub
• Implementar una Selección de Fútbol, 
conformada por Futbolistas, Entrenador y 
Masajista. 
• Aplicar herencia donde sea posible
*/

export enum Cargo{
    futbolista="futbolista",
    entrenador="entrenador",
    masajista="masajista"
}

interface Persona{
    nombre:string;
    apellido:string;
    cargo:Cargo;
}