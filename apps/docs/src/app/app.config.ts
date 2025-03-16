import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  ActivatedRouteSnapshot,
  DetachedRouteHandle,
  provideRouter,
  RouteReuseStrategy,
} from '@angular/router';
import { provideHighlightOptions } from 'ngx-highlightjs';
import { appRoutes } from './app.routes';

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return false; // Default behavior: Don't store any route
  }

  store(
    route: ActivatedRouteSnapshot,
    handle: DetachedRouteHandle | null
  ): void {
    // No need to store any route
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return false; // Default behavior: No stored route to retrieve
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return null; // Default behavior: No stored route
  }

  shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ): boolean {
    // Disable reuse only for 'motion-page' route
    if (future.routeConfig?.path === ':libraryName/:motionName') {
      return false;
    }
    return future.routeConfig === curr.routeConfig; // Default Angular behavior for other routes
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHighlightOptions({
      fullLibraryLoader: () => import('highlight.js'),
    }),
    provideAnimationsAsync(),
    { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy },
  ],
};
