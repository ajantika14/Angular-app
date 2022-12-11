import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserListService } from 'src/app/services/user-list.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
users:any[] = [];
user:any;
  constructor(private service: UserListService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.getuserDetails();
  }

  getuserDetails(){
    this.service.getUsers().subscribe(res=>{
      this.users = res;
      });

      this.router.params.subscribe(params=>{
        this.service.getUsersById(+params['id']).subscribe(user=>
          this.user = user
          );
      })

  }
}
