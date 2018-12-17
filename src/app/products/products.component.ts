import { Component, OnInit } from '@angular/core';

import { Product } from './shared/product';
import { ProductService } from './shared/product.service';
import { StorageService } from '../core/storage/storage.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService, private storageService: StorageService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

  onSelect(product: Product): void {
    this.storageService.add(product);
  }
}
