import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forRoot(
    [
      {
        path: 'counter',
        loadChildren: 'app/counter/counter.module#CounterModule'
      },
      { path: '**', redirectTo: 'counter' }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
