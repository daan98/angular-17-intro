import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'C' | 'D' | 'F';
@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export default class ControlFlowComponent {
  public showContent        = signal<boolean>(false);
  public grades             = signal<Grade>('B');
  public frameworks         = signal<string[]>(['angular', 'react', 'vue', 'astros', 'svelte']);
  public emptyFrameworks    = signal<string[]>([]);
  public pageTitle : string = 'Control Flow';

  public toggleContent() : void {
    this.showContent.update(( value ) => !value);
  }
}
