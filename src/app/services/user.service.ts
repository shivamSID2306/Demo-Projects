import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private route: Router) { }
  Users = [];
  isAvailable: boolean = false;

  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    mobile: new FormControl('', [Validators.required,Validators.minLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  })

  loginForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    password: new FormControl('')
  })

  clearRegisterForm(){
    this.registerForm.reset();
  }

  clearLoginForm(){
    this.loginForm.reset();
  }
  
  addUsers(user){
    let users = [];
    if(localStorage.getItem("Users")){
      users = JSON.parse(localStorage.getItem("Users"));
      users = [...users, user];
    }else{
      users = [user];
    }
    localStorage.setItem("Users", JSON.stringify(users));
  }

  getUsers(){
    this.Users =  JSON.parse(localStorage.getItem("Users"));
    console.log(this.Users);    
    return JSON.parse(localStorage.getItem("Users"));
  }

  onLogin(name, pass){
    this.Users.forEach(user => {
      if(user.name === name && user.password === pass){
        this.clearLoginForm();
        alert("Login Successfully.✅");
        this.route.navigateByUrl('/home');
        this.isAvailable = true;
      }
    })
    if(this.isAvailable === false){
      this.clearLoginForm();
      alert("Invalid User! ❌");
      if(confirm("Don't have an account? Register Now")){
        this.route.navigateByUrl('/register');
      }
    }  
  }

  isLoggedIn(){
    return this.isAvailable;
  }
}
