import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Movie } from '../../../Models/movies';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
//const moviesComponents = [MovieDetailsComponent, MoviesListComponent];

@NgModule({
  declarations: [MovieDetailsComponent, MoviesListComponent],
  imports: [
    CommonModule, RouterModule, Movie
  ],
  exports: [MovieDetailsComponent, MoviesListComponent],
})
export class MoviesModule { }
