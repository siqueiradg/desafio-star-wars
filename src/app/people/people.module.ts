
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PeopleRoutingModule } from './people.routing.module';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { SharedModule } from '../shared/shared.module';
import { PeopleService } from './people.service';
import { PeopleDetailResolver } from './people-detail/people-detail.resolver';
import { PlanetService } from '../planet/planet.service';

@NgModule({
  imports: [
    HttpModule,
    RouterModule,
    SharedModule,
    FormsModule,
    CommonModule,
    PeopleRoutingModule
  ],
  exports: [],
  declarations: [PeopleListComponent, PeopleDetailComponent],
  providers: [PeopleService, PeopleDetailResolver, PlanetService],
})
export class PeopleModule {}

