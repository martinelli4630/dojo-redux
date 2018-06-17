import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as fromStore from '../store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public userForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private _store: Store<fromStore.UserState>
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: [null, [Validators.required]],
      surname: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      birthDate: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    this._store.dispatch(new fromStore.AddUser(this.userForm.value));
  }
}
