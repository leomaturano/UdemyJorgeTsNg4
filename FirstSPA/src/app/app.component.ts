import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public jogoEmAndamento = true;
  public tipoEncerramento: string;

  public recebeEncerrarJogo(tipo: string): void {
    console.log('app.component.ts evento recebido = ', tipo );
    this.jogoEmAndamento = false;
    this.tipoEncerramento = tipo;
  }
}
