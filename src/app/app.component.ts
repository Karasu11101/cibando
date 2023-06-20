import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cibando';
  nome = 'Matteo';
  label = 'logo di cibando';

  allievi = [
    {nome: 'Matteo',
  cognome: 'Forcina',
  eta: 29},
  {nome: 'Mario',
  cognome: 'Rossi',
  eta: 25},
  {nome: 'Enrico',
  cognome: 'Bianchi',
  eta: 45},
  {nome: 'Carlo',
  cognome: 'Verdi',
  eta: 35}
  ];

}
