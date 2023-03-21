/* 
EJERCICIO 1
 Crear una clase que represente una Serie. Esta tiene que tener las siguientes propiedades y métodos:
 - Titulo
 - Año de estreno
 - Episodios
 - Temporadas
 - Episodios Vistos
 - Finalizada/Cancelada
 - Ver episodio (metodo)
 - Episodios por ver (metodo)
 - Serie Vista (metodo)
 - toString (metodo)
*/

export class Serie {
  private titulo: string;
  private anioEstreno: Date;
  private episodios: number;
  private temporadas: number;
  private episodiosVistos: number;
  private isFinalizada: boolean;
  constructor(
    titulo: string,
    anioEstreno: Date,
    episodios: number,
    temporadas: number,
    episodiosVistos:number,
    isFinalizada:boolean
  ) {
    this.titulo = titulo;
    this.anioEstreno = anioEstreno;
    this.episodios = episodios;
    this.temporadas = temporadas;
    this.episodiosVistos = episodiosVistos;
    this.isFinalizada = isFinalizada;
  }
  serieVista():void {
    this.isFinalizada = !this.isFinalizada;
  }
  verEpisodio():string {
    if (this.isFinalizada === true) {
      return `Ya terminaste la serie`;
    } else {
      return `Seguir la serie en el episodio ${this.episodiosVistos}?`;
    }
  }
  episodiosPorVer():string {
    const episodiosTotal=this.temporadas*this.episodios;
    const episodiosPorVer=episodiosTotal-this.episodiosVistos;
    return `Te quedan ${episodiosPorVer} episodios por ver` ;
  }
  setDate(date:Date):string{
    return date.toLocaleDateString()
  }
  toString(): string {
    return `
    Serie:...................${this.titulo}
    Año de Estreno:..........${this.setDate(this.anioEstreno)}
    Temporadas:..............${this.temporadas}
    Episodios por temporada:.${this.episodios}
    `;
  }
}
