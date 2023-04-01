import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISpecie } from '../../../../shared/Interfaces/ispecie';
import { CharactersService } from '../../../../shared/services/characters.service';
import { MoviesService } from '../../../../shared/services/movies.service';
import { SpeciesService } from '../../../../shared/services/species.service';
import { Movie } from '../movies';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  movieDetails: any = [];
  movieCharacters: any = [];
  movieSpecies: ISpecie[] = [];
  //States for accordion panel 
  panelCharactersOpenState = false;
  panelSpeciesOpenState = false;
  panelStarshipsOpenState = false;
  panelVehiclesOpenState = false;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute, private charactersService: CharactersService, private speciesServices: SpeciesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => this.getMovie(params[`id`]))
  }

  //Recieve the array index begining from 0 to 6
  getMovie(id: number) {
    //Correct de id to id+1 to succes request to the endpoint
    id = Number(id) + Number(1);
    this.moviesService.getMovie(id).subscribe(
      (data: Movie) => {
        this.movieDetails = data
        this.getMovieCharacters(data.characters)
        this.getMovieSpecies(data.species)
      });
  }

  getMovieCharacters(characters: string[]) {
    characters.forEach(x =>
      this.charactersService.getCharacterByUrl(x).subscribe(
        (data: any) => {
          this.movieCharacters.push(data);
        })
    )
  }

  getMovieSpecies(species: string[]) {
    species.forEach(x =>
      this.speciesServices.getSpecieByUrl(x).subscribe(
        (data: any) => {
          this.movieSpecies.push(data);
        })
    )
  }

}
