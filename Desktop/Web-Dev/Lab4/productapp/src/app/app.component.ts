import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  imports: [ProductsComponent],
  template: `
    <main>
      <a>
        <header class="brandname"><h2>Product List of Kaspi.kz</h2>
        </header>
      </a>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myapp';
}