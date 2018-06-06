import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './component/counter/counter.component';

@NgModule({
  imports: [
    CommonModule,
    CounterRoutingModule
  ],
  declarations: [CounterComponent]
})
export class CounterModule { }
