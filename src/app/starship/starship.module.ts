import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { StarshipRoutingModule } from './starship.routing.module';
import { StarshipDetailComponent } from './starship-detail/starship-detail.component';
import { StarshipListComponent } from './starship-list/starship-list.component';
import { StarshipDetailResolver } from './starship-detail/starship-detail.resolver';
import { StarshipService } from './starship.service';

@NgModule({
  imports: [
    HttpModule,
    RouterModule,
    SharedModule,
    FormsModule,
    CommonModule,
    StarshipRoutingModule
  ],
  exports: [],
  declarations: [StarshipListComponent, StarshipDetailComponent],
  providers: [StarshipService, StarshipDetailResolver],
})
export class StarshipModule {}
