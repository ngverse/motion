import { Component } from '@angular/core';
import { SidebarLinkComponent } from './sidebar-link/sidebar-link.component';

interface SidebarRoot {
  name: string;
  groups: SidebarGroup[];
  children?: SidebarLink[];
}

interface SidebarGroup {
  name: string;
  children: SidebarLink[];
}

export interface SidebarLink {
  name: string;
  url: string;
  mode?: 'experimental';
}

export const SIDEBAR_ROUTES = [
  {
    name: 'Getting Started',
    children: [
      {
        name: 'Introduction',
        url: '/doc/introduction',
      },
      {
        name: 'Installation',
        url: '/doc/installation',
      },
    ],
  },
  {
    name: 'Animate CSS',
    groups: [
      {
        name: 'Attention Seekers',
        children: [
          animateCSSLink('flash'),
          animateCSSLink('bounce'),
          animateCSSLink('pulse'),
        ].sort((a, b) => a.name.localeCompare(b.name)),
      },
    ],
  }
] as SidebarRoot[];

function animateCSSLink(name: string) {
  return {
    name: name,
    url: `/doc/animatecss/${name}`,
  };
}

export function getAllSidebarLinks() {
  return SIDEBAR_ROUTES.flatMap((group) => group.children);
}

@Component({
  selector: 'app-sidebar',
  imports: [SidebarLinkComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  routes: SidebarRoot[] = SIDEBAR_ROUTES;
}
