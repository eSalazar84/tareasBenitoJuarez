import { Serie } from "./serie";

const lost=new Serie(`Lost`, new Date("2012"),12,4,8,false)

lost.verEpisodio();
lost.serieVista();
lost.serieVista();
console.log(lost.verEpisodio());

console.log(lost.toString());

console.log(lost.episodiosPorVer());

