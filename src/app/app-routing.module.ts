import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'recipes',
    children: [
      {
        path: '',
        loadChildren: './recipes/recipes.module#RecipesPageModule',
      },
      {
        path: ':recipeId',
        loadChildren: './recipes/recipe-detail/recipe-detail.module#RecipeDetailPageModule'
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
