import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {HttpParams, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-coctel-coctel-detail',
  templateUrl: './coctel-detail.component.html',
  styleUrls: ['./coctel-detail.component.scss']
})
export class CoctelDetailComponent implements OnInit {

  coctel:any = []
  ids:any = [];
  id:any= this.rutaActiva.snapshot.paramMap.get("id");
  

  constructor(private rutaActiva: ActivatedRoute,
                 private _httpService: HttpClient,
             ) { 
                  
                  console.log(this.id)
                  _httpService.get(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.id}`)
                  .subscribe(
                   {
                     next: (data:any) => {
                       console.log(data)
                        this.coctel = data["drinks"][0]
                     },
                  error: error => {
      
                  }
                }
                  )
                
             }
  
  ngOnInit(): void {

  }

}
