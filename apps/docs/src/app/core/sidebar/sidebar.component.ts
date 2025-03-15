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
    name: 'General CSS',
    children: [
      generalLink('expand'),
      generalLink('expand-x'),
      generalLink('collapse'),
      generalLink('collapse-x'),
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
        ],
      },
      {
        name: 'Back Entrances',
        children: [
          animateCSSLink('backInDown'),
          animateCSSLink('backInLeft'),
          animateCSSLink('backInRight'),
          animateCSSLink('backInUp'),
        ],
      },
      {
        name: 'Flippers',
        children: [
          animateCSSLink('flip'),
          animateCSSLink('flipInX'),
          animateCSSLink('flipInY'),
          animateCSSLink('flipOutX'),
          animateCSSLink('flipOutY'),
        ],
      },
      {
        name: 'Specials',
        children: [
          animateCSSLink('hinge'),
          animateCSSLink('jackInTheBox'),
          animateCSSLink('rollOut'),
          animateCSSLink('rollIn'),
        ],
      },
      {
        name: 'Zooming Entrances',
        children: [
          animateCSSLink('zoomIn'),
          animateCSSLink('zoomInDown'),
          animateCSSLink('zoomInLeft'),
          animateCSSLink('zoomInRight'),
          animateCSSLink('zoomInUp'),
        ],
      },
      {
        name: 'Zooming Exits',
        children: [
          animateCSSLink('zoomOut'),
          animateCSSLink('zoomOutDown'),
          animateCSSLink('zoomOutLeft'),
          animateCSSLink('zoomOutRight'),
          animateCSSLink('zoomOutUp'),
        ],
      },
      {
        name: 'Sliding Entrances',
        children: [
          animateCSSLink('slideInDown'),
          animateCSSLink('slideInLeft'),
          animateCSSLink('slideInRight'),
          animateCSSLink('slideInUp'),
        ],
      },
      {
        name: 'Sliding Exits',
        children: [
          animateCSSLink('slideOutDown'),
          animateCSSLink('slideOutLeft'),
          animateCSSLink('slideOutRight'),
          animateCSSLink('slideOutUp'),
        ],
      },
    ],
  },
] as SidebarRoot[];

function animateCSSLink(name: string) {
  return {
    name: name,
    url: `/doc/animatecss/${name}`,
  };
}

function generalLink(name: string) {
  return {
    name: name,
    url: `/doc/generalcss/${name}`,
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
