import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  ricette: Recipe[];

  constructor(private recipesService: RecipesService, private router: Router) {}

  ngOnInit(): void {
    this.onGetRecipes();
  }

  onGetRecipes() {
    this.recipesService.getRecipes().subscribe({
      next: (res) => {
        this.ricette = res;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  isRecipes(): boolean {
    return this.router.url === '/ricette';
  }
}
