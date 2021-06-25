import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users = [];

  constructor(public userService: UserService, private route: Router) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  onClear(){
    this.userService.clearLoginForm();
  }

  // onLogin(name, pass){
  //   this.users.forEach(user => {
  //     if(user.name === name && user.password === pass){
  //       this.userService.clearLoginForm();
  //       alert("Login Successfully.✅");
  //       this.route.navigateByUrl('/home');
  //       this.isAvailable = true;
  //     }
  //   })
  //   if(this.isAvailable === false){
  //     this.userService.clearLoginForm();
  //     alert("Invalid User! ❌");
  //     if(confirm("Don't have an account? Register Now")){
  //       this.route.navigateByUrl('/register');
  //     }
  //   }  
  // }

  onLogin(name, password){
    this.userService.onLogin(name, password)
  }
}
