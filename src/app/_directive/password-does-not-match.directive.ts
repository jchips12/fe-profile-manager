import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export const passwordDoesNotMatchValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const passwordConfirm = control.get('passwordConfirm');

  return (password?.value !== passwordConfirm?.value) ? {passwordDoesNotMatch: true} : null;
};
