import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public userService: UserService, private route: Router) { }

  formControl = this.userService.registerForm.controls;
  user: any = {};

  ngOnInit(): void {
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
