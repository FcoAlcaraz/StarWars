import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CharacterDetailsComponent } from './components/pages/characters/character-details/character-details.component';
import { CharactersComponent } from './components/pages/characters/characters.component';
import { MovieDetailsComponent } from './components/pages/movies/movie-details/movie-details.component';
import { MoviesListComponent } from './components/pages/movies/movies-list/movies-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'character-details/:id',
    component: CharacterDetailsComponent
  },
  {
    path: 'films',
    component: MoviesListComponent
  },
  {
    path: 'movie-details/:id',
    component: MovieDetailsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  MoviesListComponent, MovieDetailsComponent, CharacterDetailsComponent, CharactersComponent
]
