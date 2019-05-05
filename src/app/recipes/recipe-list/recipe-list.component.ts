import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<RecipeModel>();

  recipes: RecipeModel[] = [
    new RecipeModel('Pokemon Ball', 'This is a simply test', 'https://bizugui.files.wordpress.com/2016/08/201.jpg'),
    new RecipeModel('Flareon', 'This is a simply test', 'https://bizugui.files.wordpress.com/2016/08/1.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  OnRecipeSelected(recipe: RecipeModel) {
    this.recipeWasSelected.emit(recipe);
  }
}
