import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import * as fromStore from '../store';
import { Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit, OnDestroy {

  private _dataSource$: Observable<any>;
  private _subscription: Subscription;
  public displayedColumns = [
    '_id',
    'name',
    'surname',
    'gender',
    'birthDate',
    'email',
    'action'
  ];
  dataSource = new MatTableDataSource([]);

  constructor(
    private _store: Store<fromStore.UserState>
  ) {
    this._dataSource$ = this._store.select(fromStore.getUsers);
  }

  ngOnInit() {
    this._store.dispatch(new fromStore.LoadUser());
    this._subscription = this._dataSource$.subscribe(data => {
      this.dataSource = data;
    });
  }

  onRemove(id: string): void {
    this._store.dispatch(new fromStore.RemoveUser(id));
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

}
