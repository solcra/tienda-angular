import { Component, OnInit } from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual 
} from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
SwiperCore.use([Virtual]);
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  images: string[] = [
    'assets/images/img-1.png',
    'assets/images/img-2.jpg'
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onSwiper(swiper:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
  slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );

}
