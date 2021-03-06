export default class Carro {
    private modelo: string
    private numeroDePortas: number
    private velocidade: number = 0

    constructor(modelo: string, numerodePortas: number) {
        this.modelo = modelo
        this.numeroDePortas = numerodePortas
    }
    
    public acelerar(): void {
        this.velocidade += 10
    }

    public parar(): void {
        this.velocidade = 0
    }

    public velocidadeAtual(): number {
        return this.velocidade
    }
    
}