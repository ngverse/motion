import { Component, computed, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'docs';
  isOpen = signal(false);
  counter = signal(10);

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
