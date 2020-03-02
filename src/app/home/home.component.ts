import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipesService } from '../recipes/recipes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  recipes: Recipe[];


  constructor(private rs: RecipesService) { }

  ngOnInit() {
    this.recipes = this.rs.getAllRecipes();
  }
}
