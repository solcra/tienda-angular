import { Component, OnInit } from '@angular/core';
import { SharedModule } from './../shared/shared.module'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, SharedModule {

  constructor() { }

  ngOnInit(): void {
  }

}
