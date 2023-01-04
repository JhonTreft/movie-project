import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import {CoctelListComponent} from './list/coctel-list.component'

import {CoctelDetailComponent} from './detail/coctel-detail.component'

import {CommonModule} from '@angular/common'

import {CoctelRoutingModule} from './coctel-routing.module'

@NgModule({
  declarations: [
    CoctelListComponent,
    CoctelDetailComponent

  ],
  imports: [
     CoctelRoutingModule,
     FormsModule,
    CommonModule,

  ]
})
export class CoctelModule { }
