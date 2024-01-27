import { Injectable } from '@angular/core';

@Injectable(

  // I have comment out this thing and insert import providers in app.module.ts
  // {
  // providedIn: 'root'
  // }
)
export class BooksService {

  constructor() { }

  getBooks(){
    return [
      {
        name:'Life Style',
        author:'Nachiket',
        image:"https://m.media-amazon.com/images/I/81p7O-Kk0WL._SL1500_.jpg",
        amount:200
      },
      {
        name:' Atomic Habit',
        author:'Nachiket Second',
        image:"https://m.media-amazon.com/images/I/81YkqyaFVEL._SL1500_.jpg",
        amount:224
      },
    ];
  }
}
