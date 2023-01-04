import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CoctelListComponent} from './list/coctel-list.component'

import {CoctelDetailComponent} from './detail/coctel-detail.component'


const routes: Routes = [
  
  {
    path:'',
    children:[
         {
            path:'',
            component: CoctelListComponent
        },
        {
            path:'detail/:id',
            component:CoctelDetailComponent
        }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoctelRoutingModule { }
