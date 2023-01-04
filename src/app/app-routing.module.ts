import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MortyComponent } from './morty/morty.component'

import { HomeComponent } from './home/home.component'

import { CoctelesComponent } from './cocteles/cocteles.component'

import { DetailCocComponent } from './detail-coc/detail-coc.component'

import { CoctelListComponent } from './coctel/list/coctel-list.component'

import { CoctelDetailComponent } from './coctel/detail/coctel-detail.component'



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'morty_api',
    component: MortyComponent
  },
  {
    path: 'cocteles',
    component: CoctelesComponent
  },
  {
    path: 'detail/:id',
    component: DetailCocComponent
  },
  {
    path: 'coctel',
    loadChildren: () => import('./coctel/coctel.module').then(m => m.CoctelModule)
  },
  {
    path: 'languajes',
    loadChildren: () => import('./languaje/languaje.module').then(m => m.LanguajeModule)
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
