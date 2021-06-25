import { UserService } from 'src/app/services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public userService: UserService) { }

  displayColumns: string[] = ["name", "mobile", "email"];
  listData: MatTableDataSource<any>
  users = [];

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem("Users"));
    this.listData = new MatTableDataSource(this.users);
  }
}
