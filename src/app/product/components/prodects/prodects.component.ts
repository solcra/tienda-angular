import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product.model';
import { ProductosService } from './../../../core/services/products/productos.service';


@Component({
  selector: 'app-prodects',
  templateUrl: './prodects.component.html',
  styleUrls: ['./prodects.component.scss']
})
export class ProdectsComponent implements OnInit {

  products!:Product [];

  constructor(
    private productosService: ProductosService
  ) { }

  ngOnInit(): void {
    this.products = this.productosService.getAllProducts();
  }

  clickProducto(id: number) {
    console.log('Id del producto:'+ id)
  }
  
}
