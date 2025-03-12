import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { twisterInDownOnEnter } from '@ngverse/motion/magiccss';
import { ProjectNameComponent } from '../../core/project-name/project-name.component';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, ProjectNameComponent, RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
  animations: [
    twisterInDownOnEnter({
      delay: 250,
    }),
  ],
})
export class HomePageComponent {}
