import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter/counter.component';
import { MatIconModule, MatFormFieldModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    CounterRoutingModule,

    MatIconModule,
    MatFormFieldModule
  ],
  declarations: [CounterComponent]
})
export class CounterModule { }
