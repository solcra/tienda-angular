import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component'
import { HomeRoutingModul } from './home-routing.module';
import { SwiperModule } from 'swiper/angular';
import { SharedModule } from './../shared/shared.module'
import { MaterialModule } from './../material/material.module';

@NgModule({
    declarations:[
        BannerComponent,
        HomeComponent,
    ],
    imports: [
        HomeRoutingModul,
        CommonModule,
        SwiperModule,
        SharedModule,
        MaterialModule
    ]
})
export class HomeModule { }