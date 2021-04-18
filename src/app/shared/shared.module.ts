import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpomemtialPipe } from './pipes/expomemtial/expomemtial.pipe';
import { HighlightDirective } from './directivos/highlight/highlight.directive';
import { HeadComponent } from './components/head/head.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    ExpomemtialPipe,
    HighlightDirective,
    HeadComponent,
    FooterComponent
  ],
  exports: [
    ExpomemtialPipe,
    HighlightDirective,
    HeadComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
