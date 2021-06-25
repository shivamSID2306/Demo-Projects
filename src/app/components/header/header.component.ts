import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hidden: boolean = false;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    console.log(this.userService.currentUserName);
  }

  onClick(){
    this.hidden = !this.hidden
  }

}
