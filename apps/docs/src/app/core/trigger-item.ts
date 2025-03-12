import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trigger-item',
  imports: [CommonModule],
  templateUrl: './trigger-item.html',
  styleUrl: './trigger-item.css',
})
export class TriggerItemComponent {
  item = input.required < TriggerItem;
}
