import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ruter
import { ProductRoutingModul } from './product-routing.module';

// COmponetes
import { ProductComponent } from './components/product/product.component'
import { ProdectsComponent } from './components/prodects/prodects.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


import { SharedModule } from './../shared/shared.module';
//Importamos a material
import { MaterialModule } from './../material/material.module';


@NgModule({
    declarations:[
        ProductComponent,
        ProdectsComponent,
        ProductDetailComponent 
    ],
    imports: [
        ProductRoutingModul,
        CommonModule,
        SharedModule,
        MaterialModule
    ]
})
export class ProductModule { }