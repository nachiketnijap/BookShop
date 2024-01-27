import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../types/Book';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  

  @Input() book: Book={} as Book;
 
  constructor(private cartService: CartService){}

  isInCart:boolean=false;
  addToCart() {
    this.isInCart=true;
    this.cartService.add(this.book);
    }

  removeFromCart(){
    this.isInCart=false;
    this.cartService.remove(this.book);
  }
}
