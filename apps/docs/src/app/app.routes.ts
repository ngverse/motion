import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'doc',
    loadComponent: () =>
      import('./pages/motion-page/motion-page').then(
        (m) => m.MotionPageComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./pages/home-page/home-page').then((m) => m.HomePageComponent),
  },
];
