import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../models/product';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
    providedIn: 'root'
})
export class CartService {
     private cartItems = signal<CartItem[]>([]);
    cartCount = computed(() => {
    return this.cartItems().reduce((total, item) => total + item.quantity, 0);
  });
  getCartItems() {
    return this.cartItems;
  }
   addToCart(product: Product): void {
    this.cartItems.update(items => {
         const existingItem = items.find(item => item.product.id === product.id);
      
      if (existingItem) {
        return items.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
         return [...items, { product, quantity: 1 }];
      }
    });
  }

  removeFromCart(productId: number): void {
    this.cartItems.update(items => 
      items.filter(item => item.product.id !== productId)
    );
  }
   increaseQuantity(productId: number): void {
    this.cartItems.update(items =>
      items.map(item =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }
  decreaseQuantity(productId: number): void {
    this.cartItems.update(items =>
      items.map(item =>
        item.product.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }
   getTotal = computed(() => {
    return this.cartItems().reduce(
      (total, item) => total + (item.product.price * item.quantity), 
      0
    );
  });
   clearCart(): void {
    this.cartItems.set([]);
  }

}