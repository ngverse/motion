import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'doc',
    loadComponent: () =>
      import('./pages/doc-container-page/doc-container-page.component').then(
        (m) => m.DocContainerPageComponent
      ),
    children: [
      {
        path: ':libraryName/:motionName',
        loadComponent: () =>
          import('./pages/motion-page/motion-page').then(
            (m) => m.MotionPageComponent
          ),
        runGuardsAndResolvers: 'always',
      },
      {
        path: '',
        redirectTo: 'animatecss/flash',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    loadComponent: () =>
      import('./pages/home-page/home-page').then((m) => m.HomePageComponent),
  },
];
