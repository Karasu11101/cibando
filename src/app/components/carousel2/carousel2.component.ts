import { Component } from '@angular/core';
import { RECIPES } from 'src/app/mocks/recipe.mock';

@Component({
  selector: 'app-carousel2',
  templateUrl: './carousel2.component.html',
  styleUrls: ['./carousel2.component.scss']
})
export class Carousel2Component {
  percorso = '../assets/image/black-bg/black';
  images = RECIPES;
}
