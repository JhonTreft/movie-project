import { Component, OnInit } from '@angular/core';
import {HttpParams, HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
 import {Router} from '@angular/router';

@Component({
  selector: 'app-coctel-list',
  templateUrl: './coctel-list.component.html',
  styleUrls: ['./coctel-list.component.scss']
})
export class CoctelListComponent {

  search = "";
  bandera = true;
  cocteles:any = [];
  info = {
    message:''
  }
  urls:any ={
    sh:"https://thecocktaildb.com/api/json/v1/1/search.php?s="
  }

  constructor(
    private _httpService: HttpClient,
    private toastr: ToastrService,
   )
  {
    if(this.search =="")
    {
      this.request(this.urls.sh)
    }
      
    }
   touch(){
      this.request(this.urls.sh + this.search)

   }

  request(url:string)
  {
      this._httpService.get(url)
       .subscribe(
      {
        next: (data:any) => {
          this.cocteles = data["drinks"]
          if(this.cocteles ==null)
            {
              this.bandera = false
                this.info.message = 'No Se Encontraron Resultados Para Tu Busqueda'
            }else{
              this.info.message = ''
              this.bandera= true
            }
        },
        error: error => {
          console.log(error)
        }
      }
    )
    if(this.bandera)
    {
         this.showSuccess()
    }else{
      console.log("sdsds")
      this.showWarning()
    }
    
  }
   
  
   showSuccess() {
    this.toastr.success('Uploaded data', 'Toastr fun!');
  }

   showWarning() {
    this.toastr.error('No Se Encontro Informacion', 'Toastr fun!');
  }

}
