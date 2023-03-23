import { Cuenta } from "./cuenta";

const cuenta_10=new Cuenta(`Emiliano Salazar`, 22000.265451)

cuenta_10.getInfo()
console.log(cuenta_10.getInfo());
cuenta_10.setInsertAmount(12500)
console.log(cuenta_10.setInsertAmount(12500));
cuenta_10.setWithDrawMoney(500.2665155)
console.log(cuenta_10.setWithDrawMoney(500.2665155));

