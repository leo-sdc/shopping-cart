import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../products/shared/product';
import { StorageService } from '../core/storage/storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Product[];
  total: number;

  constructor(private storageService: StorageService, private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.products = this.storageService.get();
    this.setTotal();
    setTimeout(() => {
      this.getProducts();
    }, 1000);
  }

  setTotal() {
    let sum = 0;
    this.products.forEach(p => {
      sum += p.value;
    });
    this.total = sum;
  }

  onSelect(product: Product): void {
    this.storageService.remove(product);
  }

  onPay() {
    this.router.navigateByUrl('payment');
  }
}
