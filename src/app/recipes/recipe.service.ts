import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new Subject<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      "Drobeno",
      "Mesano",
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/12/10/0/WU1712H_Cauliflower-Mac-and-Cheese_s4x3.jpg.rend.hgtvcom.616.462.suffix/1580140849133.jpeg",
      [
        new Ingredient('Meat', 1),
        new Ingredient('french', 20)
      ]
    ),
    new Recipe(
      "Pizza",
      "Feferoni",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoC7R4ZBv_Ij0rLihrED5NYtR5lx87cN55-g&usqp=CAU",
      [
        new Ingredient('Meat', 1),
        new Ingredient('french', 20)
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index]
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients)
  }
}
