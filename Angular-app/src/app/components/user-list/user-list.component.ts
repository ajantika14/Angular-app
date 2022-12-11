import { UserListService } from './../../services/user-list.service';
import { IUsers } from './../user';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: any = [];
  constructor(private service: UserListService) { }

  ngOnInit() {
  this.getUsers()
  }

  getUsers(){
    this.users = this.service.getUsers().subscribe(res=>{
      this.users = res;
      });
  }

}
