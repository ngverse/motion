import { CdkCopyToClipboard } from '@angular/cdk/clipboard';
import { Component, computed, input, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-source-code',
  imports: [Highlight, CdkCopyToClipboard],
  templateUrl: './source-code.component.html',
  styleUrl: './source-code.component.css',
})
export class SourceCodeComponent {
  code = input.required<string>();
  language = input<string>('ts');

  allowCopy = input(true);

  label = input<string>();

  copied = signal(false);

  outline = input(true);

  surface = input(false);

  showCopy = computed(() => this.allowCopy() && !!this.code());

  copy() {
    this.copied.set(true);
    setTimeout(() => {
      this.copied.set(false);
    }, 2000);
  }
}
