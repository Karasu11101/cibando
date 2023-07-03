import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';
import { take, first } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'cibando';

  nome: string;

  email: string;

  colore = 'red';

  coloreScelto: string;

  evidenziato = false;

  ricette: Recipe[];

  page: string;

  constructor(private recipesService: RecipesService, private userService: UserService){}

  ngOnInit(): void {
    this.onGetRecipes();
    this.page = 'home';

    this.userService.datiUtente.subscribe((res: any) => {
        // localStorage.setItem('name', res.name);
        // localStorage.setItem('email', res.email);
        this.nome = res.name;
        this.email = res.email;
      });

      // if(localStorage.getItem('name')) {
      //   this.nome = localStorage.getItem('name');
      //   this.email = localStorage.getItem('email');
      // }
  }

  onGetRecipes() {
    this.recipesService.getRecipes().pipe(
      // take(1)
      first()
    ).subscribe({
      next: (res) => {
        this.ricette = res;
        // this.ricette = this.ricette.sort((a,b) => a._id - b._id).slice(0, 4);
        this.ricette = this.ricette.slice(-4).reverse();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  cambiaSwitch() {
    this.colore = this.coloreScelto;
  }

  onEvidenziazione() {
    this.evidenziato = !this.evidenziato;
  }

  closeWindow() {
    // localStorage.removeItem('name');
    // localStorage.removeItem('email');
    this.userService.datiUtente.next(''); // è necessario svuotare la sorgente, altrimenti il replay continuerà a caricare i dati memorizzati
    this.nome = '';
    this.email = '';
  }
}
