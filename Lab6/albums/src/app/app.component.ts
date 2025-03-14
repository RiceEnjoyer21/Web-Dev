import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule],
  template: `
   
      <header><nav>
      <a routerLink="/home">Home</a>
      <a routerLink="/about">About</a>
      <a routerLink="/albums">Albums</a>
    </nav>
    </header>
    <router-outlet></router-outlet>
   
  `
})
export class AppComponent {
  title = 'albums';
}