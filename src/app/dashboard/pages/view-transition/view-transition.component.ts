import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent],
  template: `
    <shared-title [title]="pageTitle" />

    <section class="flex justify-start">
      <img 
        srcset="https://picsum.photos/id/237/200/300"
        alt="picsum"
        width="200"
        height="300"
        style="view-transition-name: hero1;"
      >
    </section>

    <div 
      class="bg-blue-500 w-56 h-56"
      style="view-transition-name: hero2;"
    ></div>
  `,
  styles: ``
})
export default class ViewTransitionComponent {
  public pageTitle : string = "View Transition 1"
}
