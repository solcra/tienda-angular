import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdectsComponent } from './components/prodects/prodects.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component'

const routes: Routes = [
    {
        path: '',
        component: ProdectsComponent
    },
    {
        path: ':id',
        component: ProductDetailComponent
    }
];
@NgModule({
    imports:[
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class ProductRoutingModul {}