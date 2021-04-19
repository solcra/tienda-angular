import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ruter
import { ContactRoutingModul } from './contact-routing.module';

// COmponetes
import { ContactComponent } from './components/contact/contact.component'


import { SharedModule } from './../shared/shared.module';
//Importamos a material
import { MaterialModule } from './../material/material.module';


@NgModule({
    declarations:[
        ContactComponent, 
    ],
    imports: [
        ContactRoutingModul,
        CommonModule,
        SharedModule,
        MaterialModule
    ]
})
export class ContactModule { }