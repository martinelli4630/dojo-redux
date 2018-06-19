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

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const note = { description: this.note };
    // dispatch
    this.note = '';
  }

  onDelete(id) {
  }
}
