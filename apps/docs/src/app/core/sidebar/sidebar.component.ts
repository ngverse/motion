import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface Group {
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
    children: [animateCSSLink('flash')].sort((a, b) =>
      a.name.localeCompare(b.name)
    ),
  },
] as Group[];

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
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  routes: Group[] = SIDEBAR_ROUTES;
}
