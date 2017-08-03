
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PeopleRoutingModule } from './people.routing.module';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';

@NgModule({
  imports: [
    CommonModule,
    PeopleRoutingModule
  ],
  exports: [],
  declarations: [PeopleListComponent, PeopleDetailComponent],
  providers: [],
})
export class PeopleModule {}

