import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FilterPipe } from './../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    FilterPipe
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    FooterComponent, HeaderComponent, FilterPipe
  ]
})
export class SharedModule { }
