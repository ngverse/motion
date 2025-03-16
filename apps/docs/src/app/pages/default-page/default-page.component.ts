import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiTableComponent } from '../../core/api-table/api-table.component';
import { SourceCodeComponent } from '../../core/source-code/source-code.component';
import { ANIMATE_DATA } from '../../motion-data/motion-data';
import { MotionOption } from '../../motion-data/motion-types';

@Component({
  selector: 'app-default-page',
  imports: [ApiTableComponent, SourceCodeComponent],
  templateUrl: './default-page.component.html',
  styleUrl: './default-page.component.css',
})
export class DefaultPageComponent {
  defaults = signal<MotionOption[]>([]);
  description = signal<string>('');
  title = signal<string>('');
  setDefault = signal<string>('');
  libraryName = signal<string>('');
  // private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  setDefaultCode = computed(() => {
    return `import {${this.setDefault()}} from '@ngverse/motion/${this.libraryName()}'`;
  });

  constructor() {
    this.updateData();
    this.router.events.subscribe(() => {
      this.updateData();
    });
  }

  updateData() {
    const libraryName = this.activatedRoute.snapshot.url[0].path;
    const library = ANIMATE_DATA.find((a) => a.name === libraryName);
    if (library && libraryName) {
      this.libraryName.set(libraryName);
      this.defaults.set(library.defaults);
      this.description.set(library.description);
      this.title.set(library.title);
      this.setDefault.set(library.setDefault);
    }
  }
}
