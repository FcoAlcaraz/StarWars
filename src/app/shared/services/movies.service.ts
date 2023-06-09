import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Movie } from '../../components/pages/movies/movies';

import { Film } from '../Interfaces/IfilmsInterface';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) { }

  //GET All Movies
  getMovies(): Observable<Film[]> {
    return this.http.get<Film[]>(`${environment.baseUrlAPI}/films`)
  }

  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${environment.baseUrlAPI}/films/${id}`)
    //return this.http.get<Movie>(`${environment.baseUrlAPI}/${id}`)
  }

  getMovieByUrl(Url: string): Observable<Movie> {
    return this.http.get<Movie>(`${Url}`)
  }
}
