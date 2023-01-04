import { Component, OnInit } from '@angular/core';

import {HttpParams, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-morty',
  templateUrl: './morty.component.html',
  styleUrls: ['./morty.component.scss']
})
export class MortyComponent  {

  ricks :any = []
  episodes_name :any =[]
  
  /*const params = new HttpParams()
  .set('p1', 'https://rickandmortyapi.com/api/character')
  .set('p2', 'https://rickandmortyapi.com/api/episode');
*/

  constructor(

   http: HttpClient
   )
   {
    http.get('https://rickandmortyapi.com/api/character')
    .subscribe(
      {
        next: (data:any) => {
          console.log(data)
          this.ricks = data["results"]
        },
        error: error => {
      
        }
      }
    )

    http.get('https://rickandmortyapi.com/api/episode')
    .subscribe(
      {
        next: (data:any) => {
          console.log(data)
          this.episodes_name= data["results"]
        },
        error: error => {
      
        }
      }
    )
   }
}
  


