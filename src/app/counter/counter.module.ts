import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter/counter.component';
import { MatIconModule, MatButtonModule } from '@angular/material';
import * as fromStore from './store';

@NgModule({
  imports: [
    CommonModule,
    CounterRoutingModule,

    MatIconModule,
    MatButtonModule,
    StoreModule.forFeature('counter', fromStore.reducers),
  ],
  declarations: [CounterComponent]
})
export class CounterModule { }
