import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  @Input() public progressoFilho: number;

  constructor() {
    //this.progresso = 50;
  }

  ngOnInit() {
  }

}
