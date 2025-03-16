import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { ProjectNameComponent } from '../../core/project-name/project-name.component';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, ProjectNameComponent, RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePageComponent {
  private _document = inject(DOCUMENT);
  title = inject(Title);
  meta = inject(Meta);

  constructor() {
    const title = `Home | @ngverse/motion`;
    const description = `home page for angular animations library  @ngverse/motion`;
    this.title.setTitle(title);

    this.meta.updateTag({
      name: 'description',
      content: description,
    });

    this.meta.addTags([
      { property: 'og:title', content: title },
      {
        property: 'og:description',
        content: description,
      },
      {
        property: 'og:image',
        content: 'https://motion.ngverse.dev/logo.png',
      },
      { property: 'og:image:alt', content: '@ngverse/motion logo' },
      { property: 'og:url', content: this._document.location.href },
      { property: 'og:type', content: 'website' },
    ]);
  }
}
