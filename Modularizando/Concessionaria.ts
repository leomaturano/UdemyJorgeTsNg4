import Carro from './Carro'
export default class Concessionaria {
    private endereco: string
    private listaDeCarros: Array<Carro>
    // tambem posso usar lista: Carro[] para declarar o array

    constructor(endereco: string, listaDeCarros:Array<Carro>) {
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco(): string { 
        return this.endereco
    }

    public mostrarListaDeCarros(): Carro[] {
        return this.listaDeCarros
    }

}