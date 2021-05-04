import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { ExpomemtialPipe } from './pipes/expomemtial/expomemtial.pipe';
import { HighlightDirective } from './directivos/highlight/highlight.directive';
import { HeadComponent } from './components/head/head.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { MaterialModule } from './../material/material.module'



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
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SharedModule { }
