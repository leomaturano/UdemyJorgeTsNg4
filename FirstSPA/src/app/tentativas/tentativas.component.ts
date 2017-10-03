import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input() public tentativasFilho: number;

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ];


  constructor() {
   }

  ngOnInit() {

  }

  ngOnChanges() {
    console.log('tentativasFilho recebidas do Pai no OnChanges', this.tentativasFilho );
    if (this.tentativasFilho !== this.coracoes.length) {
      const indice = this.coracoes.length - this.tentativasFilho - 1;
      this.coracoes[ indice ].cheio = false;
    }
  }


}
