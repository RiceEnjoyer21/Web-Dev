import { Component, Input } from '@angular/core';
import { Product } from '../model/product.model';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [ProductItemComponent, CommonModule],
})

export class ProductListComponent {
  @Input() products: Product[] = [];

  removeProduct(productId: number) {
    this.products = this.products.filter(product => product.id !== productId);
  }
}
