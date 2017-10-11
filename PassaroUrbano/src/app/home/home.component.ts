import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../services/ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'urbano-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[];

  constructor(private ofertaService: OfertasService) {

  }

  ngOnInit() {
    // this.ofertas = this.ofertaService.getOfertas();
    this.ofertaService.getOfertas2()
      .then(
        (ofertas: Oferta[]) => {
          console.log('home.componente.ts, dentro do then');
          this.ofertas = ofertas;
        }
      );
    console.log(this.ofertas);
  }
}
