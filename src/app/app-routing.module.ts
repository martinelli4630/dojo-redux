import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forRoot(
    [
      {
        path: 'home',
        loadChildren: 'app/home/home.module#HomeModule'
      },
      {
        path: 'counter',
        loadChildren: 'app/counter/counter.module#CounterModule'
      },
      {
        path: 'note',
        loadChildren: 'app/note/note.module#NoteModule'
      },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
