import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';
import { take, first } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'cibando';
  nome = 'Matteo';

  colore = 'red';
  coloreScelto: string;

  evidenziato = false;

  ricette: Recipe[];

  page: string;

  constructor(private recipesService: RecipesService){}

  ngOnInit(): void {
    this.onGetRecipes();
    this.page = 'home';
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
}
