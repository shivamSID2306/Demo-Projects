import { UserService } from 'src/app/services/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private route: Router){}

  canActivate(){
    if(this.userService.isLoggedIn() === true){
      return true
    }else{
      this.route.navigateByUrl('/login')
      return false
    }
  }
  
}
