import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MenuHeaderComponent } from './menu-header/menu-header.componen';


@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    MenuHeaderComponent
  ],
  declarations: [MenuHeaderComponent],
  providers: [],
})
export class SharedModule { }
