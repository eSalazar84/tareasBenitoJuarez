import { SimCard } from "./simCard";
import { CellPhone } from "./cellPhone";
import { Battery } from "./battery";

const sim_1=new SimCard(`telefonica`, 2281514468)

const battery_1=new Battery(5000,`Samsung`,`5r85`)

const cell_1=new CellPhone(`Motorola`,`g44`,battery_1);
cell_1.setSimCard(sim_1);

console.log(cell_1);



