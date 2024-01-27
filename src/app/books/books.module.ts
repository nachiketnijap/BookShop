import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from './books.service';
import { BooksComponent } from './books.component';



@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers:[BooksService],
})
export class BooksModule { }
