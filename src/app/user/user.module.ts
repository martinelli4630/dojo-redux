import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule
} from '@angular/material';
import { FlexModule } from '@angular/flex-layout';

import { UserRoutingModule } from './user-routing.module';
import { FormComponent } from './form/form.component';
import { ViewComponent } from './view/view.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromStore from './store';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    FlexModule,

    StoreModule.forFeature('user', fromStore.reducers),
    EffectsModule.forFeature([...fromStore.effects])
  ],
  declarations: [
    ViewComponent,
    FormComponent
  ],
  providers: [
    fromStore.UserService
  ]
})
export class UserModule { }
