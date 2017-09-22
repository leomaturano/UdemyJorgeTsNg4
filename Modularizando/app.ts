import Carro from './Carro'
import Concessionaria from './Concessionaria'
import Pessoa from './Pessoa'

// Criar carros
let carroA = new Carro('dodge journey', 4)
let carroB = new Carro('veloster', 3)
let carroC = new Carro('cerato', 4)

// Monta Lista de Carros
let listaDeCarros: Carro[] = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av Paulista', listaDeCarros)

// Listar carros da Concessionaria
console.log('Carro da concessionaria')
console.log(concessionaria.mostrarListaDeCarros())

// Comprar Carro Preferido
let cliente = new Pessoa('Joao', 'veloster')

concessionaria.mostrarListaDeCarros().map(
    (carro: Carro) => {
        if( carro['modelo'] == cliente.dizerCarroPreferido() ) {
            cliente.comprarCarro( carro )
        }

    }
)
console.log('Carro que tenho =')
console.log(cliente.dizerCarroQueTem())


