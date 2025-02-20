import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category, shirtsProducts, hoodieProducts, posterProducts, legoProducts } from './model/product.model';
import { ProductListComponent } from './product-list/product-list.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ProductListComponent, CommonModule],
})
export class AppComponent {
  title = 'pixelwear';
  categories: Category[] = [
    { name: 'T-Shirts', products: shirtsProducts },
    { name: 'Hoodies', products: hoodieProducts },
    { name: 'Vynyl', products: posterProducts },
    { name: 'LEGO', products: legoProducts },
  ];

  selectedCategory: Category | null = null;

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }
}