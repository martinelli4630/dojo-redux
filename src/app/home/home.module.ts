import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import {
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,

    MatIconModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
