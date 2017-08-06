import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { PlanetRoutingModule } from './planet.routing.module';
import { SharedModule } from '../shared/shared.module';
import { PlanetService } from './planet.service';
import { PlanetDetailResolver } from './planet-detail/planet-detail.resolver';
import { PeopleService } from '../people/people.service';

@NgModule({
  imports: [
    HttpModule,
    RouterModule,
    SharedModule,
    FormsModule,
    CommonModule,
    PlanetRoutingModule
  ],
  exports: [],
  declarations: [PlanetListComponent, PlanetDetailComponent],
  providers: [PlanetService, PlanetDetailResolver, PeopleService],
})
export class PlanetModule {}
