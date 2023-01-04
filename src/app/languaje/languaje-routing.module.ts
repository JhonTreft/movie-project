import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddLanguajeComponent } from './add/add-languaje.component'

import { EditLanguajeComponent } from './edit/edit-languaje.component'

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'add',
        component: AddLanguajeComponent
      },
      {
        path: 'edit',
        component: EditLanguajeComponent
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanguajeRoutingModule { }
