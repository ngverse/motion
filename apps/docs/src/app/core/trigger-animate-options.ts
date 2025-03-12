import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiTableComponent } from './api-table/api-table.component';

@Component({
  selector: 'app-trigger-motion-options',
  imports: [CommonModule, ApiTableComponent],
  templateUrl: './trigger-motion-options.html',
  styleUrl: './trigger-motion-options.css',
})
export class TriggerMotionOptionsComponent {
  api = [
    {
      name: 'delay',
      type: 'number',
      description: 'Delay the animation by the given number of milliseconds.',
    },
  ];
}
