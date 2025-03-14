import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  styleUrls: ['./about.component.css'],
  template: '<h1>About</h1>',
  encapsulation: ViewEncapsulation.None 
})
export class AboutComponent {}