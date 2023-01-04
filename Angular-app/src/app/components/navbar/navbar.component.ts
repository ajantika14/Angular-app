import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  values = [];
  data:any[] =[];
  constructor() { }

  ngOnInit(): void {
  }

  inputs(event:any){
    this.values = event.target.value;
    this.data.push(this.values);
    return this.data;
  }

  search(){
    console.log(this.values);
  }


}
