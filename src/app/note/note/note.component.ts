import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  public notes$: Observable<any>;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

  }
}
