import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroContas = 0;
    agencia;
    _cliente;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    // #saldo = 0;
    _saldo = 0;

    get saldo(){
        return this._saldo;
    }

    construct(agencia, cliente){
        this.cliente = cliente; /// utilizando meu acessor, e não a variavel
        this.agencia = agencia;
        ContaCorrente.numeroContas += 1;
    }

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

    tranferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}
