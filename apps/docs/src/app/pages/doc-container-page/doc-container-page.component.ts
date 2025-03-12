import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../core/sidebar/sidebar.component';

@Component({
  selector: 'app-doc-container-page',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './doc-container-page.component.html',
  styleUrl: './doc-container-page.component.css',
})
export class DocContainerPageComponent {}
