import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { domainValidator, hasEmailError, isRequired } from '../../utils/validators';
import { AuthService } from '../../data-acces/auth.service';
import { toast } from 'ngx-sonner';
import { GoogleButtonComponent } from '../../ui/google-button/google-button.component';

interface FormSignUp {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink,GoogleButtonComponent],
  templateUrl: './sign-up.component.html',
})
export default class SignUpComponent {
  private _formBuilder = inject(FormBuilder);
  private _authService = inject(AuthService);
  private _router = inject(Router);

  // Método para verificar si un campo es requerido
  isRequired(field: 'email' | 'password') {
    return isRequired(field, this.form);
  }

  // Método para verificar si hay un error en el email
  hasEmailError() {
    return hasEmailError(this.form);
  }

  // Formulario reactivo
  form = this._formBuilder.group<FormSignUp>({
    email: this._formBuilder.control('', [
      Validators.required,
      Validators.email,
      domainValidator // Se agrega el validador personalizado
    ]),
    password: this._formBuilder.control('', Validators.required),
  });

  // Método para manejar el envío del formulario
  async submit() {
    if (this.form.invalid) return;

    const { email, password } = this.form.value;

    if (!email || !password) return;

    if (this.form.get('email')?.hasError('invalidDomain')) {
      toast.error('Correo inválido, debe pertenecer al dominio @unajma.edu.pe');
      return;
    }

    try {
      await this._authService.signUp({ email, password });
      this._router.navigateByUrl('/tasks');
      toast.success('Usuario creado correctamente');
    } catch (error) {
      toast.error('Ocurrió un error');
    }
  }
  async submitWithGoogle() {
    try {
      await this._authService.signInWithGoogle();
      toast.success('Bienvenido denuevo');
      this._router.navigateByUrl('/perfil');
    } catch (error) {
      toast.error('Ocurrio un error');
    }
  }
}
