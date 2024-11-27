import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        pathMatch: 'full',
        loadComponent: () => import('./RickAndMorty/pages/rmhome-page/rmhome-page.component').then(m => m.RMhomePageComponent)
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];
