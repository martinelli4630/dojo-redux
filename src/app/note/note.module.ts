import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { NoteRoutingModule } from './note-routing.module';
import { NoteComponent } from './note/note.component';
import {
  MatInputModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';
import * as fromStore from './store';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NoteRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,

    // StoreModule.forFeature('note', fromStore.reducers),
    // EffectsModule.forFeature([...fromStore.effects])
  ],
  declarations: [NoteComponent],
  providers: [fromStore.NoteService]
})
export class NoteModule { }
