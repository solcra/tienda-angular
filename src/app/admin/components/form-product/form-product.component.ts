import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyValidators } from './../../../utils/validators'
import { ProductosService } from './../../../core/services/products/productos.service';
import { AngularFireStorage } from '@angular/fire/storage'
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;
  image$: Observable<any>;
  constructor(
    private formBuilder: FormBuilder,
    private productosService: ProductosService,
    private router: Router,
    private storage: AngularFireStorage
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
      price:  ['',[Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description:  ['',[Validators.required]]
    })
  }
  get priceFild() {
    return this.form.get('price');
  }
  uploadFile(event) {
    const file = event.target.files[0];
    console.log(file);
    const dir = 'images.png';
    const fileRef = this.storage.ref(dir);
    const task = this.storage.upload(dir, file);

    task.snapshotChanges()
    .pipe(
      finalize(()=> {
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe(url => {
          console.log(url);
          this.form.get('image').setValue(url);
        })
      })
    )
    .subscribe();
  }
}
