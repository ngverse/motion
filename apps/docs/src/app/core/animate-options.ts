import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiTableComponent } from './api-table/api-table.component';

@Component({
  selector: 'app-motion-options',
  imports: [CommonModule, ApiTableComponent],
  templateUrl: './motion-options.html',
  styleUrl: './motion-options.css',
})
export class MotionOptionsComponent {
  api = [
    {
      name: 'delay',
      type: 'number',
      description: 'Delay the animation by the given number of milliseconds.',
    },
  ];
}
