import { Routes } from '@angular/router';
import { privateGuard, publicGuard } from './core/auth.guard';

export const routes: Routes = [
  {
    canActivateChild: [publicGuard()],
    path: 'auth',
    loadChildren: () => import('./auth/features/auth.routes'),
  },
  {
    canActivateChild: [privateGuard()],
    path: 'perfil',
   loadComponent: () => import('./shared/ui/layout-component'),

    loadChildren: () => import('./perfil/features/perfil.routes')
  },
  {
    path: '**',
    redirectTo: '/perfil',
  },
];