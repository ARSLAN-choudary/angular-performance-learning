import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent), 
        pathMatch: 'full',
      },
      {
        path: 'default',
        loadComponent: () => import('./components/default-strategy/default-strategy.component').then(m => m.DefaultStrategyComponent),
      },
      {
        path: 'onpush',
        loadComponent: () => import('./components/onpush-strategy/onpush-strategy.component').then(m => m.OnpushStrategyComponent),
      },
      {
        path: 'default-two',
        loadComponent: () => import('./other-example-default/other-example-default.component').then(m => m.OtherExampleDefaultComponent),
      },
      {
        path: 'onpush-two',
        loadComponent: () => import('./other-example-onpush/other-example-onpush.component').then(m => m.OtherExampleOnpushComponent),
      },
];
