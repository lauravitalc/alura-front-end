class Cliente {
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    // #saldo = 0;
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0){
           return;
        }
        
        this._saldo += valor;
        return valor;
    }

}


const cliente1 = new Cliente();
cliente1.nome = 'Laura';
cliente1.cpf = 11122233345;

const cliente2 = new Cliente();
cliente2.nome = 'Gabriel';
cliente2.cpf = 22233344456;

const contaCorrente1 = new ContaCorrente();
contaCorrente1.agencia = 1001;
console.log(contaCorrente1);

contaCorrente1.depositar(150);
console.log(contaCorrente1);

const valorSacado = contaCorrente1.sacar(50);
console.log(valorSacado);
console.log(contaCorrente1);

