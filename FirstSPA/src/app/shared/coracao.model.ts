export class Coracao {

    constructor(
        public cheio: boolean,
        public urlCoracaoCheio: string = '/assets/coracao_cheio.png',
        public urlCocacaoVazio: string = '/assets/coracao_vazio.png'
    ) { }

    public exibeCoracao(): string  {
        if (this.cheio) {
            return this.urlCoracaoCheio;
        } else {
            return this.urlCocacaoVazio;
        }
    }
}
