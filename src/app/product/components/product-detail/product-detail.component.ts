import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../../product.model';
import { ProductosService } from './../../../core/services/products/productos.service';
import { SharedModule } from './../../../shared/shared.module'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, SharedModule {
  produc: Product;
  constructor(
    private route: ActivatedRoute,
    private productosService: ProductosService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      const id = params.id;
      this.produc = this.productosService.getProduct(id);
      console.log(this.produc);
      console.log(id);
    });
  }

}
