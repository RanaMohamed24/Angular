import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink, CommonModule, CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartService = inject(CartService);
  cartItems = this.cartService.getCartItems();
  total = this.cartService.getTotal;
  increaseQty(productId: number): void {
    this.cartService.increaseQuantity(productId);
  }
  decreaseQty(productId: number): void {
    this.cartService.decreaseQuantity(productId);
  }
  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
  }
  clearCart(): void {
    this.cartService.clearCart();
  }
}



