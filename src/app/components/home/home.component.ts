import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'cibando';
  nome = 'Matteo';

  colore = 'red';
  coloreScelto: string;

  evidenziato = false;

  cambiaSwitch() {
    this.colore = this.coloreScelto;
  }

  onEvidenziazione() {
    this.evidenziato = !this.evidenziato;
  }
}
