import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-heavy-loaders-fast',
  standalone: true,
  imports: [],
  template: `
    <section [class]="cssClass">
      <ng-content></ng-content>
    </section>
  `,
})
export class HeavyLoadersFastComponent {
  @Input({ required: true }) cssClass !: string;
}
