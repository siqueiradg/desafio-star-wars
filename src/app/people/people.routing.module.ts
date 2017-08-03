
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { PeopleListComponent } from './people-list/people-list.component';



const routes: Routes = [
  { path: 'id/:id', component: PeopleDetailComponent },
  { path: 'list', component: PeopleListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeopleRoutingModule { }
