import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
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
