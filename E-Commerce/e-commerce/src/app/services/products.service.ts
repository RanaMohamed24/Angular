import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private products: Product[] = [
        {
            id: 1,
            title: 'MacBook Pro M3 Max - Silver',
            price: 124999,
            description: 'The most advanced chips ever built for a personal computer. With a 14-core CPU and 30-core GPU, the M3 Max chip delivers mind-blowing performance.',
            category: 'Electronics',
            image: 'images/products/laptop.png',
            rating: { rate: 4.9, count: 128 },
            brand: 'Apple',
            stock: 12
        },
        {
            id: 2,
            title: 'iPhone 15 Pro - Titanium',
            price: 59999,
            description: 'Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action button, and a more versatile Pro camera system.',
            category: 'Electronics',
            image: 'images/products/phone.png',
            rating: { rate: 4.8, count: 245 },
            brand: 'Apple',
            stock: 5
        },
        {
            id: 3,
            title: 'Wireless Noise-Cancelling Headphones',
            price: 18499,
            description: 'Industry-leading noise cancellation with Dual Noise Sensor technology. Up to 30-hour battery life with quick charging.',
            category: 'Electronics',
            image: 'images/products/headphones.png',
            rating: { rate: 4.7, count: 89 },
            brand: 'Sonora',
            stock: 20
        },
        {
            id: 4,
            title: 'Rugged Smartwatch Ultra',
            price: 32999,
            description: 'The most rugged and capable watch ever. Featuring a robust titanium case, precision dual-frequency GPS, and up to 36 hours of battery life.',
            category: 'Electronics',
            image: 'images/products/watch.png',
            rating: { rate: 4.9, count: 156 },
            brand: 'Zenith',
            stock: 8
        },
        {
            id: 5,
            title: 'Mechanical RGB Keyboard',
            price: 5499,
            description: 'Compact 60% mechanical gaming keyboard with customizable RGB backlighting and tactile switches for ultimate speed.',
            category: 'Electronics',
            image: 'images/products/keyboard.png',
            rating: { rate: 4.6, count: 72 },
            brand: 'KeyMaster',
            stock: 0
        },
        {
            id: 6,
            title: 'Next-Gen Gaming Console',
            price: 24999,
            description: 'Experience lightning-fast loading, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio.',
            category: 'Electronics',
            image: 'images/products/console.png',
            rating: { rate: 4.8, count: 320 },
            brand: 'PlaySphere',
            stock: 15
        },
        {
            id: 7,
            title: '4K Ultra HD Monitor 27"',
            price: 12999,
            description: 'See every detail with stunning clarity on this 27-inch 4K monitor. Perfect for creative work and immersive gaming.',
            category: 'Electronics',
            image: 'images/products/monitor.png',
            rating: { rate: 4.5, count: 45 },
            brand: 'Pixal',
            stock: 4
        },
        {
            id: 8,
            title: 'Portable SSD 2TB',
            price: 7499,
            description: 'Massive capacity and blazing-fast data transfers for your photos, videos, and files. Pocket-sized and durable.',
            category: 'Electronics',
            image: 'images/products/ssd.png',
            rating: { rate: 4.7, count: 112 },
            brand: 'DataVault',
            stock: 30
        }
    ];

    constructor() { }

    getProducts(): Product[] {
        return this.products;
    }

    getProductById(id: number): Product | undefined {
        return this.products.find(p => p.id === id);
    }
}
