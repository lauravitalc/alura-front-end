export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        // Spread Operator
        // return [...this.negociacoes];
        return this.negociacoes;
    }
}
