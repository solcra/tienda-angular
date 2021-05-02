import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MyValidators } from './../../../utils/validators'
import { ProductosService } from './../../../core/services/products/productos.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;
  constructor(
    private formBuilder: FormBuilder,
    private productosService: ProductosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;

      this.productosService.getProduct(this.id)
      .subscribe(product => {
        this.form.patchValue(product);
      })
    });
  }

  sabeProduct(event: Event) {
    event.preventDefault();
    if(this.form.valid){
      const product = this.form.value;
      this.productosService.updateProduct(this.id, product)
      .subscribe((newProduc) => {
        console.log(newProduc);
        this.router.navigate(['/admin/product']);
      });
    }
    console.log(this.form.value);
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      title:  ['',[Validators.required]],
      price:  ['',[Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description:  ['',[Validators.required]]
    })
  }
  get priceFild() {
    return this.form.get('price');
  }

}
