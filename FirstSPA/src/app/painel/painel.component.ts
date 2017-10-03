import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public instrucao = 'Traduza a fraze:';
  public frases: Frase[];
  public resposta: string;
  public rodada: number;
  public rodadaFrase: Frase;
  public progressoPai: number;
  public tentativas: number;

  @Output() public emiteEncerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    // console.log( this.frases );
    this.frases = FRASES;
    this.rodada = 0;
    this.progressoPai = 0;
    this.tentativas = 3;
    this.atualizaRodadaFrase();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('componente painel destruido.');
  }

  atualizaRodadaFrase(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }

  atualizaResposta(resposta: Event) {
    // console.log( (<HTMLInputElement> resposta.target).value );
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  verificarResposta(): void {
    // console.log(this.resposta);

    if (this.rodadaFrase.frasePtBr === this.resposta) {
      // alert('Parabens abestado!!');
      // incrementa rodada e o progresso
      this.progressoPai += (100 / this.frases.length);
      this.rodada++;

      if (this.rodada < this.frases.length) {
        this.atualizaRodadaFrase();
      } else {
        // Acertou todas as questões
        this.emiteEncerrarJogo.emit('vitoria');
      }
    } else {
      // alert('Errou!!!!!');
      // diminuir a variável de tentativas
      this.tentativas--;
      if (this.tentativas < 0) {
        alert('Acabaram as tentativas.');
        this.emiteEncerrarJogo.emit('derrota');
      }
    }
  }
}
