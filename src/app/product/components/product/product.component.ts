import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { Product } from '../../../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnChanges, OnInit {
    @Input() product!: Product; 
    @Output() productCliecKey: EventEmitter<any> = new EventEmitter;
    tody = new Date();
    constructor() {
        console.log('Constructor');
    }
    ngOnChanges(changes: SimpleChanges){
        console.log('ngOnChanges');
        console.log(changes);
    }
    ngOnInit(){
        console.log('gnOnInit')
    }
    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        console.log('ngOnDestroy');
    }
    addCarrito() {
        console.log('Añadido al carrito')
        this.productCliecKey.emit(this.product.id)
    }
}