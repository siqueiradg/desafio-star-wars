import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { VehicleRoutingModule } from './vehicle.routing.module';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { VehicleService } from './vehicle.service';
import { VehicleDetailResolver } from './vehicle-detail/vehicle-detail.resolver';

@NgModule({
  imports: [
    HttpModule,
    RouterModule,
    SharedModule,
    FormsModule,
    CommonModule,
    VehicleRoutingModule
  ],
  exports: [],
  declarations: [VehicleListComponent, VehicleDetailComponent],
  providers: [VehicleService, VehicleDetailResolver],
})
export class VehicleModule {}
