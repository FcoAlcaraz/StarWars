import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IPlanet } from '../../../../shared/Interfaces/iplanet';
import { ISpecie } from '../../../../shared/Interfaces/ispecie';
import { IStarship } from '../../../../shared/Interfaces/istarship';
import { CharactersService } from '../../../../shared/services/characters.service';
import { MoviesService } from '../../../../shared/services/movies.service';
import { PlanetsService } from '../../../../shared/services/planets.service';
import { SpeciesService } from '../../../../shared/services/species.service';
import { StarshipsService } from '../../../../shared/services/starships.service';
import { VehiclesService } from '../../../../shared/services/vehicles.service';
import { Movie } from '../movies';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  //Lists for movie details attributes
  movieDetails: any = [];
  movieCharacters: any = [];
  movieSpecies: ISpecie[] = [];
  movieStarships: IStarship[] = [];
  moviePlanets: IPlanet[] = [];
  movieVehicles: IPlanet[] = [];

  //States for accordion panel togglers
  panelCharactersOpenState = false;
  panelSpeciesOpenState = false;
  panelStarshipsOpenState = false;
  panelVehiclesOpenState = false;
  panelPlanetsOpenState = false;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private charactersService: CharactersService,
    private speciesServices: SpeciesService,
    private starShipsService: StarshipsService,
    private planetService: PlanetsService,
    private vehiclesService: VehiclesService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => this.getMovie(params[`id`]))
  }

  //Recieve the array index begining from 0 to 6
  getMovie(id: number) {
    //Correct de id to 1 instead 0 to succes the request to the endpoint
    id = Number(id) + Number(1);
    this.moviesService.getMovie(id).subscribe(
      (data: Movie) => {
        this.movieDetails = data

        //Additional movie information
        //GET: Characters, Species, Starships, Planets, Vehivles
        this.getMovieCharacters(data.characters)
        this.getMovieSpecies(data.species)
        this.getMovieStarships(data.starships)
        this.getMoviePlanets(data.planets)
        this.getMovieVehicles(data.vehicles)
      });
  }

  //GET: Characters
  getMovieCharacters(characters: string[]) {
    characters.forEach(x =>
      this.charactersService.getCharacterByUrl(x).subscribe(
        (data: any) => {
          this.movieCharacters.push(data);
        })
    )
  }

  //GET: Species
  getMovieSpecies(species: string[]) {
    species.forEach(x =>
      this.speciesServices.getSpecieByUrl(x).subscribe(
        (data: any) => {
          this.movieSpecies.push(data);
        })
    )
  }
  //GET: Starships
  getMovieStarships(starships: string[]) {
    starships.forEach(x =>
      this.starShipsService.getStarshipByUrl(x).subscribe(
        (data: any) => {
          this.movieStarships.push(data);
        })
    )
  }
  //GET: Planets
  getMoviePlanets(planets: string[]) {
    planets.forEach(x =>
      this.planetService.getPlanetsByUrl(x).subscribe(
        (data: any) => {
          this.moviePlanets.push(data);
        })
    )
  }
  //GET: Vehivles
  getMovieVehicles(vehicles: string[]) {
    vehicles.forEach(x =>
      this.vehiclesService.getVechicleByUrl(x).subscribe(
        (data: any) => {
          this.movieVehicles.push(data);
        })
    )
  }

  //GET
  getCharacterByUrl(Url: string) {
    this.router.navigateByUrl(Url)
  }
} 
