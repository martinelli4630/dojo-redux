import { Component } from '@angular/core';
import * as fromStore from '../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  public counter$: Observable<any>;

  constructor() { }

  onIncrement() {

  }

  onDecrement() {

  }

}
