import { Injectable } from '@angular/core';

import { Product } from '../../products/shared/product';

const cartStore = 'userCartList';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
    this.clear();
  }

  public add(product: Product) {
    const cart = this.get();
    const exists = cart.filter(p => {
      return p.id === product.id;
    });
    if (exists.length > 0) {
      return;
    }
    cart.push(product);
    this.set(cart);
  }

  public remove(product: Product) {
    const cart = this.get().filter(p => {
      return p.id !== product.id;
    });
    this.set(cart);
  }

  public clear() {
    localStorage.setItem(cartStore, JSON.stringify([]));
  }

  public get(): Product[] {
    return JSON.parse(localStorage.getItem(cartStore));
  }

  private set(cart: Product[]) {
    localStorage.setItem(cartStore, JSON.stringify(cart));
  }
}
