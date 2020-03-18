import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[];
  //movieService: MovieService;
  constructor(private movieService: MovieService) {}
  getMoviesFromService(): void{
    this.movies = this.movieService.getMovie();
  }
  ngOnInit(): void {
    this.getMoviesFromService();
  }
  selectedMovie: Movie
  onSelect(movie: Movie): void{
    this.selectedMovie = movie;
   // alert(`selectedMovie = ${JSON.stringify(this.selectedMovie)}`)
  }
}
