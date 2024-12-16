import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { authStateService } from '../data-acces/auth-state.service';

@Component({
  standalone: true,
  imports: [RouterModule, RouterLink],
  selector: 'app-loyout',
  template: `
  <header class="h-20 mb-8 w-full max-w-screen-lg mx-auto px-4">
    <nav class="flex items-center justify-between h-full">
      <a 
        class="text-2xl font-bold text-gray-800 hover:text-gray-600" 
        routerLink="/perfil"
      >
        Socialma
      </a>
      <button 
        type="button" 
        class="text-sm font-medium text-white bg-green-700 rounded-lg px-5 py-2.5 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" 
        (click)="logOut()"
      >
        Salir
      </button>
    </nav>
  </header>
  <router-outlet></router-outlet>
  `,
})  
export default class LayaouComponent {
  private _authState = inject(authStateService);
  private _router = inject(Router);
  async logOut() {
    await this._authState.logOut();
    this._router.navigateByUrl('/auth/sign-in');
  }
}

//rutas privadas
