import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  image: string;
  name: string;
  description: string;
  rating: number;
  link: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule,],
  template: `
   <section class="results">
  <div class="products">
    <div *ngFor="let product of products" class="product">
      <img [src]="product.image" [alt]="product.name" />
      <h3>{{product.name}}</h3>
      <p>{{product.description}}</p>
      <p class="rating">Rating: {{product.rating}}</p>
      <div id="l"><a [href]="product.link" target="_blank">View Product</a>
      <div class="share">
      <a (click)="wShare(product.link)"><img src="https://img.icons8.com/?size=100&id=16733&format=png"></a>
      <a (click)="tShare(product.link)"><img src="https://img.icons8.com/?size=100&id=lUktdBVdL4Kb&format=png"></a>
</div></div>
    </div>
  </div>
</section>
  `,
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  wShare(productLink: string) {
    const message = `Check out this product: ${productLink}`;
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  }
  tShare(productLink: string) {
    const message = `Check out this product: ${productLink}`;
    const telegramLink = `https://t.me/share/url?url=${encodeURIComponent(message)}`;
    window.open(telegramLink, '_blank');
  }

  products: Product[] = [
    {
      image: "https://resources.cdn-kaspi.kz/img/m/p/h02/h59/63948652249118.jpg?format=gallery-medium",
      name: "Sony PlayStation 5",
      description: "With Sony PlayStation 5, you'll experience the true power of gaming",
      rating: 5,
      link: "https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/?c=750000000"
    },
    {
      image: "https://resources.cdn-kaspi.kz/img/m/p/h26/ha1/63982141407262.jpg?format=gallery-medium",
      name: "Xbox Series X",
      description: "Future adventures, current passions, and classic games - Xbox Series X is the best console to enjoy thousands of favorite games from four generations of Xbox.",
      rating: 4.9,
      link: "https://kaspi.kz/shop/p/xbox-series-x-1tb-chernyi-100824897/?c=750000000"
    },
    {
      image: "https://resources.cdn-kaspi.kz/img/m/p/h09/h4c/64191552651294.jpg?format=gallery-medium",
      name: "Nintendo Switch",
      description: "The Nintendo Switch (OLED model) is designed to be taken anywhere and played with ease. The colorful OLED screen lets you immerse yourself in a new adventure.",
      rating: 3,
      link: "https://kaspi.kz/shop/p/nintendo-switch-oled-krasnyi-sinii-102984631/?c=750000000"
    },
    {
      image: "https://resources.cdn-kaspi.kz/img/m/p/pa0/p16/15844428.png?format=gallery-medium",
      name: "Valve Steam Deck",
      description: "The new portable console from VALVE will allow you to immerse yourself in the world of games again, offering an incredible experience!",
      rating: 4.2,
      link: "https://kaspi.kz/shop/p/valve-steam-deck-oled-512-gb-115001687/?c=750000000"
    },
    {
      image: "https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium",
      name: "Apple iPhone 16 Pro Max",
      description: "The flagship iPhone 16 Pro Max has incorporated the best features of a modern gadget. This is the most productive device in the Apple iPhone line with a large display, amazing performance and incredible external ergonomics.",
      rating: 4.8,
      link: "https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000"
    },
    {
      image: "https://resources.cdn-kaspi.kz/img/m/p/pa8/pcf/20117665.png?format=gallery-medium",
      name: "Samsung Galaxy S25 Ultra",
      description: "The Samsung Galaxy S25, released on February 7, 2025, is a premium Android smartphone that builds upon its predecessors with refined design and enhanced performance. It features a 6.2-inch Dynamic AMOLED 2X display with a 120Hz refresh rate, providing smooth visuals",
      rating: 4.7,
      link: "https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-512-gb-temno-chernyi-133434601/?c=750000000"
    },
    {
      image: "https://resources.cdn-kaspi.kz/img/m/p/p51/p52/20760179.jpg?format=gallery-medium",
      name: "OnePlus 13",
      description: "The OnePlus 13, released on January 7, 2025, is a flagship Android smartphone that combines high performance with a sleek design.",
      rating: 5,
      link: "https://kaspi.kz/shop/p/oneplus-13-24-gb-1024-gb-chernyi-133578552/?c=750000000"
    },
    {
      image: "https://resources.cdn-kaspi.kz/img/m/p/ha9/hd6/85791058165790.png?format=gallery-medium",
      name: "Apple MacBook Air 13",
      description: "The Apple MacBook Air 13 M3 (2024) laptop stands out for its ergonomics and performance. Despite its light weight and thin body, the device is capable of performing tasks that require high-performance hardware.",
      rating: 5,
      link: "https://kaspi.kz/shop/p/apple-macbook-air-13-m3-2024-16-gb-ssd-256-gb-macos-mc8g4-131761862/?c=750000000"
    },
    {
      image: "https://resources.cdn-kaspi.kz/img/m/p/h08/h2f/86262698868766.png?format=gallery-medium",
      name: "Huawei MateBook X Pro 14.2",
      description: "The Huawei MateBook X Pro 14.2 is a premium ultrabook that combines high performance with a sleek, lightweight design. It features a 14.2-inch 3.1K OLED touchscreen display with a 120Hz refresh rate, offering vibrant visuals and smooth interactions.",
      rating: 4.6,
      link: "https://kaspi.kz/shop/p/huawei-matebook-x-pro-vghh-x-14-2-16-gb-ssd-1000-gb-win-11-53014aux-128092311/?c=750000000"
    },
    {
      image: "https://resources.cdn-kaspi.kz/img/m/p/hde/ha1/87059457343518.png?format=gallery-medium",
      name: "Lenovo LOQ 15AHP9 15.6",
      description: "The Lenovo LOQ series is a line of budget-friendly gaming laptops designed to deliver high performance without a hefty price tag.",
      rating: 4.3,
      link: "https://kaspi.kz/shop/p/lenovo-loq-15ahp9-15-6-16-gb-ssd-1024-gb-dos-83dx00bjrk-123292108/?c=750000000"
    },
    {
      image: "https://resources.cdn-kaspi.kz/img/m/p/h63/h21/85990957187102.jpg?format=gallery-medium",
      name: "Samsung QE55Q60DAUXCE",
      description: "The Samsung QE55Q60DAUXCE Smart TV LED TV supports voice control via Samsung Bixby. Thanks to built-in technologies, 20W speakers produce clear and voluminous stereo sound.",
      rating: 5,
      link: "https://kaspi.kz/shop/p/samsung-qe55q60dauxce-140-sm-seryi-119285285/?c=750000000"
    },
    {
      image: "https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-medium",
      name: "Apple AirPods 3 with Lightning Charging",
      description: "The Apple-designed dynamic driver uses a custom amplifier to deliver incredible detail. You'll hear everything from deep, rich bass to crystal-clear highs.",
      rating: 4.7,
      link: "https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000"
    }
  ];
}