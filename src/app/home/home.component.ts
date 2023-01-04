import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { MovieService } from '../services/movie.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  movies: any = []
  constructor(
    http: HttpClient
  ) {
    http.get('https://ibasoft.com.co/movies')
      .subscribe(
        {
          next: data => {
            console.log(this.movies)
            this.movies = data
          },
          error: error => {
            console.log(error)
          }
        }
      )
  }
}



