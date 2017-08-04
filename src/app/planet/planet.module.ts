
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { PlanetRoutingModule } from './planet.routing.module';

@NgModule({
  imports: [
    CommonModule,
    PlanetRoutingModule
  ],
  exports: [],
  declarations: [PlanetListComponent, PlanetDetailComponent],
  providers: [],
})
export class PlanetModule {}
