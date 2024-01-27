import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
    {path :'',component:BooksComponent},
    {path:'cart',component:CartComponent, canActivate:[authGuard]},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent}

];
