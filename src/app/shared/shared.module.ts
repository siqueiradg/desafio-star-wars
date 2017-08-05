import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MenuHeaderComponent } from './menu-header/menu-header.componen';
import { TextLimitPipe } from './pipes/text-limit.pipe';


@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    MenuHeaderComponent,
    TextLimitPipe
  ],
  declarations: [MenuHeaderComponent, TextLimitPipe],
  providers: [],
})
export class SharedModule { }
