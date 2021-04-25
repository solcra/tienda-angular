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
      this.fetchProduct(id)
      //this.produc = this.productosService.getProduct(id);
      console.log(this.produc);
      console.log(id);
    });
  }

  fetchProduct(id: string){
    this.productosService.getProduct(id)
    .subscribe(product => {
      this.produc = product;
      console.log(product);
    })
  }

  createProduct(){
    const newProduct:Product = {
      id: '232',
      title: 'new granada',
      image: 'assets/images/mug.png',
      price: 3022,
      description: 'Nuevo producto'
    }
    this.productosService.createProduct(newProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  updateProducto(){
    const updateProduct: Partial<Product> = {
      title: 'new Vasquez',
      price: 3022555,
      description: 'Nuevo producto echo por Carlos'
    }
    this.productosService.updateProduct('232', updateProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  deleteProducto(){
    this.productosService.deleteProduct('232')
    .subscribe(rta => {
      console.log(rta);
    });
  }

}
