import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product, ProductsResponse } from '../models/product';



@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private http = inject(HttpClient);
    private productsUrl = 'https://dummyjson.com/products';

    constructor() { }

    getProducts(): Observable<Product[]> {
        return this.http.get<ProductsResponse>(this.productsUrl).pipe(
            map(response => response.products)
        );
    }
     getProductById(id: number): Observable<Product> {
        return this.http.get<Product>(`${this.productsUrl}/${id}`);
    }
        

}
