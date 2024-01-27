import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BooksComponent } from "./books/books.component";
import { BooksService } from './books/books.service';
import { CartComponent } from "./cart/cart.component";
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './frebase.config';
import { AuthService } from './auth/auth.service';




@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    providers: [BooksService],
    imports: [CommonModule, RouterOutlet, BooksComponent, CartComponent,RouterModule]
})
export class AppComponent implements OnInit{
  title = 'bookShop';
  ngOnInit(): void {
      initializeApp(firebaseConfig);
  }

  constructor(private authservice:AuthService){}

  isAuthenticated(){
    return this.authservice.isAuthenticated;
  }

  logout(){
    this.authservice.logout();
  }
}
