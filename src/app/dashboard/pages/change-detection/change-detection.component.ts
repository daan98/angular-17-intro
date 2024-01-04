import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TitleComponent, CommonModule],
  template: `
    <shared-title [title]="pageTitle()" />

    <pre>{{ frameworkAsProperty | json }}</pre>
    <pre>{{ frameworkAsSignal() | json }}</pre>
    <pre></pre>
  `,
  styles: ``
})
export default class ChangeDetectionComponent implements OnInit, OnDestroy {
  
  public frameworkAsSignal   = signal({
    name: 'Angular',
    releaseDate: 2016
  })  ;
  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016
  };
  public pageTitle           = computed(() => `Change Detection - ${this.frameworkAsSignal().name}`);
  public timer : any;

  public ngOnInit(): void {
    this.timer = setTimeout(() => {
      this.frameworkAsSignal.update((frame) => ({
        ...frame,
        name: 'AngularJS'
      }))
    }, 2000);
  }

  public ngOnDestroy(): void {
    clearTimeout(this.timer);
  }
}
