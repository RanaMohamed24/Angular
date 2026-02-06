import { Component, Input,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;
  private cartService = inject(CartService);
  private toastr = inject(ToastrService);
   addToCart(event: Event): void {
     event.stopPropagation();
    this.cartService.addToCart(this.product);
    this.toastr.success(`${this.product.title} added to cart!`, 'Added');
  }

}
