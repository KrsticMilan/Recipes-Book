import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.sass"],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Drobeno",
      "Mesano",
      "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg"
    ),
    new Recipe(
      "Pizza",
      "Feferoni",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoC7R4ZBv_Ij0rLihrED5NYtR5lx87cN55-g&usqp=CAU"
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
