import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {
   products: Product[] = [];
   isLoading = true;   
  error: string | null = null;  



private productsService = inject(ProductsService);
 

  ngOnInit(): void {
      this.productsService.getProducts().subscribe({
        next: (data) => {
        this.products = data;
        this.isLoading = false;
      },
        error: (error) => {
          console.error('Error fetching products:', error);
          this.error = 'Failed to load products';
          this.isLoading = false;
        }
      });
  }
}
