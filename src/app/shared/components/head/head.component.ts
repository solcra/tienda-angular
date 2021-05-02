import { Component, OnInit } from '@angular/core';
import { CartService } from './../../../core/services/cart.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  total = 0;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.cart$.subscribe(products => {
      console.log(products);
      this.total = products.length;
    })
  }

}
