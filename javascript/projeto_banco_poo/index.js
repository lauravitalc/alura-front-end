import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente('Laura', 111525252525);

const cliente2 = new Cliente('Gabriel', 112223445555);

const contaCorrente1 = new ContaCorrente(1001, cliente1);
contaCorrente1.depositar(500);

const contaCorrente2 = new ContaCorrente(1002, cliente2);
contaCorrente1.depositar(500);

let valorTransferencia = 200;
contaCorrente1.tranferir(valorTransferencia, contaCorrente2);

console.log(contaCorrente1);
console.log(contaCorrente2);
console.log(ContaCorrente.numeroContas);

