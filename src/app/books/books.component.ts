import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookComponent } from "./book/book.component";
import {Book} from '../types/Book';
import { BooksService } from './books.service';

@Component({
    selector: 'app-books',
    standalone: true,
    templateUrl: './books.component.html',
    styleUrl: './books.component.css',
    imports: [FormsModule, CommonModule, BookComponent]
   
})
export class BooksComponent implements OnInit{

    books:Book[]=[];

    constructor(private booksService:BooksService){}
    ngOnInit(): void {
      this.books=this.booksService.getBooks();
    }
    

    // isDisabled:boolean=false;

    isShowing:boolean=true;

    // handleClick(){
    //   alert(" I am inside the page")
    // }

    // myName:string='';
    // handleInput(event:any){
    //   this.myName=event.target.value;
    // }

    // showStatus(){
    //   this.isShowing=!this.isShowing;
    // }

   
}
