import { Component, OnInit, AfterViewInit } from '@angular/core';

// AferViewInit -> para saver si fue inicialisado los componentes hijos.

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() {
    
   }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

  }

}
