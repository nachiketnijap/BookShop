import { Injectable } from '@angular/core';
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import { LoginForm, RegisterForm } from '../types/Auth';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { Router } from '@angular/router';
import {  signOut } from "firebase/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean=false;

  constructor(private router:Router) { }
  isLoading :boolean=false;
  

  login(form:LoginForm){
    if(this.isLoading) return;
    this.isLoading=true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated=true;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated=false;
      }).finally(()=>(this.isLoading=false));
  }

  passwordMatched:boolean=true;
  isLoadingForm :boolean=false;
  register(form:RegisterForm){
    if(this.isLoading) return;
    this.isLoading=true;
    if(form.password != form.cPassword){
      this.passwordMatched=false;
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated=true;
        this.router.navigate(['']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated=false;
      }).finally(()=>(this.isLoadingForm=false));
  }


  logout(){
    const auth = getAuth();
      signOut(auth).then(() => {
          this.router.navigate(['login']);
          this.isAuthenticated=false;
        }).catch((error) => {
        // An error happened.
      });
  }
}
