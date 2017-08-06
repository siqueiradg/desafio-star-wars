
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanetListComponent } from './planet-list/planet-list.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { PlanetDetailResolver } from './planet-detail/planet-detail.resolver';

const routes: Routes = [
  { path: 'id/:id', component: PlanetDetailComponent,  resolve: [PlanetDetailResolver]},
  { path: 'list', component: PlanetListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanetRoutingModule { }
