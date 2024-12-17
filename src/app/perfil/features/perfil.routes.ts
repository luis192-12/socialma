import {Route, Routes} from '@angular/router';
export default [

    {
        path: '',
        loadComponent: () => import('./perfil-list/perfil-list.component'),

    },
  

    {
        path: 'new',
        loadComponent: () => import('./perfil-form/perfil-form.component'),
    },
    {
        path: 'edit/:idPerfil',
        loadComponent: () => import('./perfil-form/perfil-form.component'),
    },
    {
        path: 'post',
        loadComponent:() => import('./post/post.component'),
    },

]as Routes;