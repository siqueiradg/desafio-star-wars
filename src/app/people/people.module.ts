
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { PeopleRoutingModule } from './people.routing.module';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { SharedModule } from '../shared/shared.module';
import { PeopleService } from './people.service';


@NgModule({
  imports: [
    HttpModule,
    SharedModule,
    FormsModule,
    CommonModule,
    PeopleRoutingModule
  ],
  exports: [],
  declarations: [PeopleListComponent, PeopleDetailComponent],
  providers: [PeopleService],
})
export class PeopleModule {}

