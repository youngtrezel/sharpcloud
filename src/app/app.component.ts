import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyDropdown } from './components/my-dropdown/my-dropdown.component';
import { Subject } from '../app/dropdown.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyDropdown],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sc_dropdownlist';
  selectedSubject!: Subject;

  updateSubject(subject: Subject) {
    this.selectedSubject = subject;
  }

  subjects = [
    { Name: 'Art', Colour: '#e91e63' },
    { Name: 'History', Colour: '#673ab7' },
    { Name: 'Geography', Colour: '#4caf50' },
    { Name: 'Maths', Colour: '#2196f3' },
  ];

  ngOnInit() {
    this.selectedSubject = this.subjects[0];
  }
}
