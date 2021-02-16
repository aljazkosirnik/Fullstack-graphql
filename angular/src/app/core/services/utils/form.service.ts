import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor() {}

  public validate(form: FormGroup): boolean {
    if (form.invalid) {
      Object.keys(form.controls).forEach((field: string) => form.get(field).markAsTouched());
      return false;
    }
    return true;
  }

  public checkPassword(password: string, confirmPassword: string): Function {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[password];
      const matchingControl = formGroup.controls[confirmPassword];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      matchingControl.setErrors(control.value !== matchingControl.value ? { mustMatch: true } : null);
    };
  }
}
