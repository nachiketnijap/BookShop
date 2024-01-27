import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterForm } from '../../types/Auth';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form: RegisterForm = {
    email: '',
    password: '',
    cPassword: ''
  };
 
  
  constructor(private authService:AuthService){}
  isLoading(){
    return this.authService.isLoadingForm;
  }
  submit() {
    this.authService.register(this.form);

  }
}
