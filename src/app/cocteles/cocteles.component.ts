import { Component, OnInit } from '@angular/core';
import {HttpParams, HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
 import {Router} from '@angular/router';

@Component({
  selector: 'app-cocteles',
  templateUrl: './cocteles.component.html',
  styleUrls: ['./cocteles.component.scss']
})
export class CoctelesComponent {

  search = "";
  cocteles:any = []
  info = {
    message:''
  }
  urls:any ={
    sh:"https://thecocktaildb.com/api/json/v1/1/search.php?s="
  }

  constructor(
    private _httpService: HttpClient,
    private toastr: ToastrService
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
                this.info.message = 'No Se Encontraron Resultados Para Tu Busqueda'
                console.log("dentro")
            }else{
              this.info.message = ''
            }
        },
        error: error => {
          console.log(error)
        }
      }
    )

    this.showSuccess()

  }

   showSuccess() {
    this.toastr.success('Uploaded data', 'Toastr fun!');
  }
}
