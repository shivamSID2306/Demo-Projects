import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public userService: UserService, private route: Router) { }

  emailAlreadyTaken: boolean;
  mobileAlreadyTaken: boolean;

  formControl = this.userService.registerForm.controls;
  user: any = {};
  users = [];
  usersEmail = [];
  usersMobile = [];

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.users.forEach(user => this.usersEmail.push(user.email))
    this.users.forEach(user => this.usersMobile.push(user.mobile))
    
    this.userService.registerForm.get('email').valueChanges.subscribe(email => {
      for(let i = 0; i < this.usersEmail.length; i++){
        if(this.usersEmail[i] === email){
          this.emailAlreadyTaken = true;
        }
      }
    })

    this.userService.registerForm.get('mobile').valueChanges.subscribe(mobile => {
      for(let i = 0; i < this.usersMobile.length; i++){
        if(this.usersMobile[i] === mobile){
          this.mobileAlreadyTaken = true;
        }
      }
    })
  }

  onSubmit(){
    Object.assign(this.user, this.userService.registerForm.value)
    this.userService.addUsers(this.user);
    this.userService.clearRegisterForm();
    alert("Form is Submitted!");
    this.route.navigateByUrl('/login');
  }

  onClear(){
    this.userService.clearRegisterForm();
  }

}
