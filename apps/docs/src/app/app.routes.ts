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
        path: 'get-started',
        loadComponent: () =>
          import('./pages/get-started-page/get-started-page.component').then(
            (g) => g.GetStartedPageComponent
          ),
      },
      {
        path: 'animatecss/defaults',
        loadComponent: () =>
          import('./pages/default-page/default-page.component').then(
            (m) => m.DefaultPageComponent
          ),
      },
      {
        path: 'generalcss/defaults',
        loadComponent: () =>
          import('./pages/default-page/default-page.component').then(
            (m) => m.DefaultPageComponent
          ),
      },
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
        redirectTo: 'get-started',
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
