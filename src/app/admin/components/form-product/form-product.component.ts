import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'

import { ProductosService } from './../../../core/services/products/productos.service'

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productosService: ProductosService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  sabeProduct(event: Event) {
    event.preventDefault();
    if(this.form.valid){
      const product = this.form.value;
      this.productosService.createProduct(product)
      .subscribe((newProduc) => {
        console.log(newProduc);
        this.router.navigate(['/admin/product']);
      });
    }
    console.log(this.form.value);
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['',[Validators.required]],
      title:  ['',[Validators.required]],
      price:  ['',[Validators.required]],
      image: [''],
      description:  ['',[Validators.required]]
    })
  }

}
