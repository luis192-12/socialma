import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/features/auth.routes').then((m) => m.default),
  },
  {
    path: '',
    redirectTo: 'auth/sign-in',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'auth/sign-in',
  },
];

