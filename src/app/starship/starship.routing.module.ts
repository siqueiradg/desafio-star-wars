
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarshipDetailComponent } from './starship-detail/starship-detail.component';
import { StarshipDetailResolver } from './starship-detail/starship-detail.resolver';
import { StarshipListComponent } from './starship-list/starship-list.component';

const routes: Routes = [
  { path: 'id/:id', component: StarshipDetailComponent,  resolve: [StarshipDetailResolver]},
  { path: 'list', component: StarshipListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarshipRoutingModule { }
