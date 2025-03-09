import { query, stagger, transition, trigger } from '@angular/animations';
import { Component, computed, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { anFlash } from '@ngverse/animate';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('filterAnimation', [
      transition(':increment', [
        query(':enter', [stagger(50, [anFlash()])], {
          optional: true,
        }),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'docs';
  isOpen = signal(false);
  counter = signal(0);

  items = computed(() =>
    new Array(this.counter()).fill(0).map((_, index) => index)
  );

  toggle() {
    this.isOpen.set(!this.isOpen());
  }

  incr() {
    this.counter.set(this.counter() + 1);
  }
}
