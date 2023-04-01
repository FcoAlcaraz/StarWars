import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { RouterModule } from '@angular/router';
import { Movie } from './movies';
const moviesComponents = [MovieDetailsComponent, MoviesListComponent];

@NgModule({
  declarations: [MovieDetailsComponent, MoviesListComponent],
  imports: [
    CommonModule, RouterModule, Movie
  ],
  exports: [MovieDetailsComponent, MoviesListComponent],
})
export class MoviesModule { }
