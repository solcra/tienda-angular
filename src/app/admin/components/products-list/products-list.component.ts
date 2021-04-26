import { Component, OnInit } from '@angular/core';
import { ProductosService } from './../../../core/services/products/productos.service'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];
  constructor(
    private productosService:ProductosService
  ) {
    
   }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productosService.getAllProducts()
    .subscribe(products => {
      this.products = products;
      console.log(this.products);
    })
  }
  deleteProduct(id:string){
    this.productosService.deleteProduct(id)
    .subscribe(rsp =>{
      this.fetchProducts();
      console.log(rsp);

    })
  }

}
