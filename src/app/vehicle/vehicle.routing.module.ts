
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { VehicleDetailResolver } from './vehicle-detail/vehicle-detail.resolver';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';

const routes: Routes = [
  { path: 'id/:id', component: VehicleDetailComponent,  resolve: [VehicleDetailResolver]},
  { path: 'list', component: VehicleListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleRoutingModule { }
