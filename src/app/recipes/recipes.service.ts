import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Chaise Pliante',
      imageUrl:
        'assets/images/seza.jpg',
      ingredients: ['Prix: Ar 30 000', 'Année: 2019', 'Modèle: Pliante']
    },
    {
      id: 'r2',
      title: 'Salon Bleu',
      imageUrl:
        'assets/images/2-cc.jpg',
      ingredients: ['Prix: Ar 2 500 000', 'Année: 2019', 'Modèle: 2-1-1']
    },
    {
      id: 'r3',
      title: 'Salon Blanc',
      imageUrl:
        'assets/images/salonFotsy.jpg',
      ingredients: ['Prix: Ar 2 800 000', 'Année: 2019', 'Modèle: 2-2-1']
    },
    {
      id: 'r4',
      title: 'Salon Marron',
      imageUrl:
        'assets/images/salonCompletMarron.jpg',
      ingredients: ['Prix: Ar 3 000 000', 'Année: 2019', 'Modèle: 3-1-1']
    },

  ];
  constructor() {

  }
  getAllRecipes() {
    return [...this.recipes];
  }
  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId; 
    })
  };
  }
}
