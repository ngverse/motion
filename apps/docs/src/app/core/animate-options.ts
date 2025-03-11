import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiTableComponent } from './api-table/api-table.component';

@Component({
  selector: 'app-animate-options',
  imports: [CommonModule, ApiTableComponent],
  templateUrl: './animate-options.html',
  styleUrl: './animate-options.css',
})
export class AnimateOptionsComponent {
  api = [
    {
      name: 'delay',
      type: 'number',
      description: 'Delay the animation by the given number of milliseconds.',
    },
  ];
}
