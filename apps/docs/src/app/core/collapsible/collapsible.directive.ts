import { Directive, model, output } from '@angular/core';

@Directive({
  selector: '[appCollapsible]',
  host: {
    '(click)': 'onClick()',
    '[attr.data-expanded]': 'expanded()',
    '[attr.data-collapsed]': '!expanded()',
  },
  exportAs: 'appCollapsible',
})
export class CollapsibleDirective {
  expanded = model(false);

  expand = output();

  collapse = output();

  onClick() {
    const nextValue = !this.expanded();
    this.expanded.set(nextValue);
    if (nextValue) {
      this.expand.emit();
    } else {
      this.collapse.emit();
    }
  }
}
