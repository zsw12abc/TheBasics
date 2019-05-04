import {Component, OnInit} from '@angular/core';
import {RecipeModel} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes: RecipeModel[] = [
    new RecipeModel('A Test Recipe', 'This is a simply test', 'https://recipes.timesofindia.com/photo/54673639.cms')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
