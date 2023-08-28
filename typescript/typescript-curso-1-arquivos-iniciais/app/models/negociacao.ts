export class Negociacao {
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;

    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

    get volume(): number{
        return this.quantidade * this.valor;
    }

    get data(): Date {
        // Programação Defensiva
        const data = new Date(this._data.getTime());
        return this._data;
    }
}