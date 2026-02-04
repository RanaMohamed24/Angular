import { Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list';
import { ProductDetailsComponent } from './components/product-details/product-details';
import { LoginComponent } from './components/auth/login/login';
import { RegisterComponent } from './components/auth/register/register';
import { CartComponent } from './components/cart/cart';
import { NotFoundComponent } from './components/not-found/not-found';

export const routes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'products', component: ProductsListComponent, title: 'Products' },
    { path: 'product/:id', component: ProductDetailsComponent, title: 'Product Details' },
    { path: 'login', component: LoginComponent, title: 'Login' },
    { path: 'register', component: RegisterComponent, title: 'Register' },
    { path: 'cart', component: CartComponent, title: 'Cart' },
    { path: '**', component: NotFoundComponent, title: '404 - Not Found' }
];
