class Auto{
    public patente: string;
    public modelo: string;
    public marca: string;
    protected velocidadActual: number;
    protected velocidadMax: number;
    public encendido: boolean;
    constructor(patente, modelo, marca){
       this.patente = patente;
       this.modelo = modelo;
       this.marca = marca;
       this.velocidadActual = 0;
       this.velocidadMax = 0;
       this.encendido = false;
    }
    encenderApagar(){
       if(this.encendido === true){
           this.encendido = false;
       } else {
           this.encendido = true;
       }
    }
    protected acelerar(){
       this.velocidadActual = this.velocidadActual + 10;
    }
    protected frenar(){
       this.velocidadActual = this.velocidadActual - 10;
    }
   }