import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../model/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {

  @Input() product!: Product;
  @Output() remove = new EventEmitter<number>();

  likeProduct() {
    this.product.likes++;
  }

  removeProduct() {
    this.remove.emit(this.product.id);
  }

  whatsappShare(productLink: string) {
    const message = `Check out this product: ${productLink}`;
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  }

  telegramShare(productLink: string) {
    const message = `Check out this product: ${productLink}`;
    const telegramLink = `https://t.me/share/url?url=${encodeURIComponent(message)}`;
    window.open(telegramLink, '_blank');
  }

}
