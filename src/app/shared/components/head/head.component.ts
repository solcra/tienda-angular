import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

//Pupes
import { map } from 'rxjs/operators'

import { CartService } from './../../../core/services/cart.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  total$: Observable<number>;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.total$ = this.cartService.cart$
    .pipe(
      map(products => products.length)
    );
  }

}
