import { Injectable } from '@angular/core';
import {Movie} from '../models/movie';
import {fakeMovies} from './fake-movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  getMovie(): Movie[]{
    return fakeMovies;
  }
  constructor() { }
}
