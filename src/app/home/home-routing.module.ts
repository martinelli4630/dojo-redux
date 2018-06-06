import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: HomeComponent,
    },
  ])],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
