import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginForm } from '../../types/Auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: LoginForm = {
    email: '',
    password: '',
  };

  constructor(private authService:AuthService){}
  
  isLoading(){
    return this.authService.isLoading;
  }


  submit() {
    
    this.authService.login(this.form);
    
  }

}
