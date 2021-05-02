import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// Interfaces
import { Product } from './../../product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[]=[];
  private cart= new BehaviorSubject< Product[]>([]);
  cart$ = this.cart.asObservable();
  constructor() { }
  addCart(products: Product) {
    this.products = [...this.products, products];
    this.cart.next(this.products);
  }
}
