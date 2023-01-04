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
  SearchUser ='';
  searchedUsers = [];
  constructor(private service: UserListService) { }

  ngOnInit() {
  this.getUsers()
  }

  getUsers(){
    this.users = this.service.getUsers().subscribe(res=>{
      this.users = res;
      this.sorted()
      return this.users;
      });
  }

  sorted(){
    this.users.sort((a:any,b:any)=>(a.name > b.name ? 1:-1))
  }

  onType(event:any){
    console.log(event.target.value)
  }

  searchText(){
    this.searchedUsers = this.users;
    this.searchedUsers = this.searchedUsers.filter((res:any)=>{
       return res.name.toLocaleLowerCase().match(this.users.name.toLocaleLowerCase())
    })
  }
}
