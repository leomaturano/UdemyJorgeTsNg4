"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria = (function () {
    // tambem posso usar lista: Carro[] para declarar o array
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
exports.default = Concessionaria;
//# sourceMappingURL=Concessionaria.js.map