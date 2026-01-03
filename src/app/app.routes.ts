import { Routes } from '@angular/router';

export const routes: Routes = [
{
    path: 'home-page',
    loadComponent: () => import('./pages/home-page/home-page.ts').then(m => m.HomePage)
}




];
