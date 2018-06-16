import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: ViewComponent
    },
    {
      path: 'form',
      component: FormComponent
    }
  ])],
  exports: [RouterModule]
})
export class UserRoutingModule { }
