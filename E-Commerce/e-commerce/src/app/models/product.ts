export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    thumbnail: string;   
    rating: number;
    brand: string;
    stock: number;
    discountPercentage?: number; 
}

export interface ProductsResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}