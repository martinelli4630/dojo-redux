import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoteRoutingModule } from './note-routing.module';
import { NoteComponent } from './note/note.component';
import {
  MatInputModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    NoteRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [NoteComponent]
})
export class NoteModule { }
