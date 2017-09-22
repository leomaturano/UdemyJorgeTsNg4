"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Concessionaria_1 = require("./Concessionaria");
var Pessoa_1 = require("./Pessoa");
// Criar carros
var carroA = new Carro_1.default('dodge journey', 4);
var carroB = new Carro_1.default('veloster', 3);
var carroC = new Carro_1.default('cerato', 4);
// Monta Lista de Carros
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.default('Av Paulista', listaDeCarros);
// Listar carros da Concessionaria
console.log('Carro da concessionaria');
console.log(concessionaria.mostrarListaDeCarros());
// Comprar Carro Preferido
var cliente = new Pessoa_1.default('Joao', 'veloster');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log('Carro que tenho =');
console.log(cliente.dizerCarroQueTem());
//# sourceMappingURL=app.js.map