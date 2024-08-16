import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from '../../dropdown.interface';
import { OutSideClickEventDirective } from '../../outside-click-event.directive';


@Component({
  selector: 'my-dropdown',
  standalone: true,
  imports: [CommonModule, OutSideClickEventDirective],
  templateUrl: './my-dropdown.component.html',
  styleUrl: './my-dropdown.component.css',

})
export class MyDropdown {
  @Input() subjects!: Subject[];
  @Output() updateSubjectEvent = new EventEmitter<Subject>();

  currentSubject! : Subject;
  showMenu = false;

  showOptions() {
    this.showMenu = !this.showMenu;
  }

  ngOnInit() {
    this.currentSubject = this.subjects[0];
  }

  updateSubject(subject: Subject){
    this.currentSubject = subject;
    this.updateSubjectEvent.emit(subject);
    this.showOptions();
  }
}
