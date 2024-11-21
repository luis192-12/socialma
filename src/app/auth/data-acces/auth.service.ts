import { Inject, Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
export interface User{
  email: string;
  password:string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _auth = Inject(Auth)
  signUp(user: User) { 
    return createUserWithEmailAndPassword(
      this._auth,
    user.email,
  user.password);
  }
}
