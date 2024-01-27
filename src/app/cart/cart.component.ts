import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
      constructor(private cartService:CartService){}

      getCart(){
        return this.cartService.get();
      }
}
