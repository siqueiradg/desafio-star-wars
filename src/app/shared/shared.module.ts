import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MenuHeaderComponent } from './menu-header/menu-header.componen';
import { TextLimitPipe } from './pipes/text-limit.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';


@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    MenuHeaderComponent,
    TextLimitPipe, SearchFilterPipe, OrderByPipe
  ],
  declarations: [MenuHeaderComponent, TextLimitPipe, SearchFilterPipe, OrderByPipe],
  providers: [],
})
export class SharedModule { }
