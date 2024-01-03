import { Component, signal } from '@angular/core';

type Grade = 'A' | 'B' | 'C' | 'D' | 'F';
@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export default class ControlFlowComponent {
  public showContent = signal<boolean>(false);
  public grades = signal<Grade>('B');

  public toggleContent() : void {
    this.showContent.update(( value ) => !value);
  }

  public getGradeMessage(grade : any) : void {
    console.log({grade})
    // this.grades.set()
  }
}
