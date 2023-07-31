import { Cliente } from "./cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = 'Laura';
cliente1.cpf = 11122233345;

const cliente2 = new Cliente();
cliente2.nome = 'Gabriel';
cliente2.cpf = 22233344456;

const contaCorrente1 = new ContaCorrente();
contaCorrente1.agencia = 1001;
contaCorrente1.cliente = cliente1;

const contaCorrente2 = new ContaCorrente();
contaCorrente2.cliente = cliente2;
contaCorrente2.agencia = 1002;

console.log(contaCorrente1);
console.log(contaCorrente2);

let valorTransferencia = 200;
contaCorrente1.depositar(500);
contaCorrente1.tranferir(valorTransferencia, contaCorrente2);

console.log(contaCorrente1);
console.log(contaCorrente2);

