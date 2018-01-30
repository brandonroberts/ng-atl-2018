import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-component',
  template: `
    <form [formGroup]="form">
      <input placeholder="Email" formControlName="email">
      <span *ngIf="form.hasError('required', ['email'])">
        Email is required
      </span>
    </form>
  `
})
export class MyFormComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit() {
  }

}
