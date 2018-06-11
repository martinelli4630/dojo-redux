import { NoteComponent } from './note/note.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: NoteComponent
    }
  ])],
  exports: [RouterModule]
})
export class NoteRoutingModule { }
