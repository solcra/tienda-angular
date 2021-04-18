import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  // Yamado de datos si se nesesita de alguna parte
  ngOnInit(): void {
  }
  title = 'platzi-store';
  item = ['Calos', 'Granada', 'Andres'];
  power: number = 10;
  
  addItem() {
    this.item.push(this.title)
  }
  deleteItem(index: number){
    this.item.splice(index, 1);
  }
}
