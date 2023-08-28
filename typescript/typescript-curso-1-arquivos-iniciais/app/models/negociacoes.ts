import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    // private negociacoes: Array<Negociacao> = [];
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    // lista(): ReadonlyArray<Negociacao>{
    lista(): readonly Negociacao[]{
        // Spread Operator
        // return [...this.negociacoes];
        return this.negociacoes;
    }
}
