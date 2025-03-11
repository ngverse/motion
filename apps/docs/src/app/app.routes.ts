import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'doc',
    loadComponent: () =>
      import('./pages/animate-page/animate-page').then(
        (m) => m.AnimatePageComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./pages/home-page/home-page').then((m) => m.HomePageComponent),
  },
];
