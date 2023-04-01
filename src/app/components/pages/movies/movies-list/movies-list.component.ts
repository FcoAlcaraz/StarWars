import { Component } from '@angular/core';
import { MoviesService } from '../../../../shared/services/movies.service';
import { Movie } from '../movies';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent {
  films: any[] = [];
  movieDetails: Movie;
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(
      (data: any) => {
        this.films = data.results
        console.log(this.films)
      });
  }

  sortOrderAsc() {
      this.moviesService.getMovies().subscribe(
        (data: any) => {
          this.films = data.results
          this.films.sort(function (a: any, b: any) { return a.episode_id - b.episode_id })
          console.log("AscOrder",this.films)
        });
  }

  defaultOrder() {
    this.moviesService.getMovies().subscribe(
      (data: any) => {
        this.films = data.results
        this.films.sort(function (a: any, b: any) { return a.episode_id + b.episode_id })
        console.log("DefOder", this.films)
      });
  }

  sortOrderDesc() {
    this.moviesService.getMovies().subscribe(
      (data: any) => {
        this.films = data.results
        this.films.sort(function (a: any, b: any) { return b.episode_id - a.episode_id })
        console.log("DesOrder", this.films)
      });
  }
}
