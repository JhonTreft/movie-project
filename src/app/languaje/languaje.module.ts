import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLanguajeComponent } from './add/add-languaje.component';
import { EditLanguajeComponent } from './edit/edit-languaje.component';
import { LanguajeRoutingModule } from './languaje-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddLanguajeComponent,
    EditLanguajeComponent
  ],

  imports: [
    CommonModule,
    LanguajeRoutingModule,
    FormsModule
  ]
})
export class LanguajeModule { }
