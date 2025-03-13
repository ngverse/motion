import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarLink } from '../sidebar.component';

@Component({
  selector: 'app-sidebar-link',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar-link.component.html',
  styleUrl: './sidebar-link.component.css',
})
export class SidebarLinkComponent {
  link = input.required<SidebarLink>();
}
