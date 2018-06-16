import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  public notes$: Observable<any>;
  public note;

  constructor(private _store: Store<fromStore.NoteState>) {
    this.notes$ = this._store.select(fromStore.getNotes);
  }

  ngOnInit() {
    this._store.dispatch(new fromStore.LoadNote());
  }

  onSubmit() {
    const note = { description: this.note };
    this._store.dispatch(new fromStore.AddNote(note));
    this.note = '';
  }

  onDelete(id) {
    this._store.dispatch(new fromStore.RemoveNote(id));
  }
}
