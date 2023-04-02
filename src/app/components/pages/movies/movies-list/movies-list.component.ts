import { Component } from '@angular/core';
import { IMovie } from '../../../../shared/Interfaces/imovie';
import { MoviesService } from '../../../../shared/services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent {
  films: IMovie[] = [];
  constructor(private moviesService: MoviesService) { }

  //Load data on component charge
  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(
      (data: any) => {
        this.films = data.results
      });
  }

  // Ordering methods by episode_id attribute
  // Ascendent episodes order
  sortOrderAsc() {
    this.moviesService.getMovies().subscribe(
      (data: any) => {
        this.films = data.results
        this.films.sort(function (a: any, b: any) { return a.episode_id - b.episode_id })
      });
  }

  // Default order
  defaultOrder() {
    this.moviesService.getMovies().subscribe(
      (data: any) => {
        this.films = data.results
        this.films.sort(function (a: any, b: any) { return a.episode_id + b.episode_id })
      });
  }

  // Descendent order
  sortOrderDesc() {
    this.moviesService.getMovies().subscribe(
      (data: any) => {
        this.films = data.results
        this.films.sort(function (a: any, b: any) { return b.episode_id - a.episode_id })
      });
  }

}
