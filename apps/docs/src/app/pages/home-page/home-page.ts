import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectNameComponent } from "../../core/project-name/project-name.component";

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, ProjectNameComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePageComponent {}
