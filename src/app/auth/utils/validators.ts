import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

export const isRequired = (field: 'email' | 'password', form: FormGroup) => {
  const control = form.get(field);

  return control && control.touched && control.hasError('required');
};

export const hasEmailError = (form: FormGroup) => {
  const control = form.get('email');
  return control && control?.touched && control.hasError('email');
};


export const domainValidator = (control: FormControl): { [key: string]: boolean } | null => {
  const email = control.value as string | null;
  if (email && !email.endsWith('@unajma.edu.pe')) {
    return { invalidDomain: true };
  }
  return null;
};
