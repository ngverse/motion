import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiTableComponent } from './api-table/api-table.component';

@Component({
  selector: 'app-trigger-animate-options',
  imports: [CommonModule, ApiTableComponent],
  templateUrl: './trigger-animate-options.html',
  styleUrl: './trigger-animate-options.css',
})
export class TriggerAnimateOptionsComponent {
  api = [
    {
      name: 'delay',
      type: 'number',
      description: 'Delay the animation by the given number of milliseconds.',
    },
  ];
}
