import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder,Validators,FormArray} from '@angular/forms'
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  userForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('Ajantika Banerjee', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern('Mantosh Singh')
      ]),
      username: new FormControl('ajantika'),
      email: new FormControl('ajantika@email.com'),
      phone: new FormControl('0000000000'),
      website: new FormControl('www.gibinzz.com'),
      address: new FormGroup({
        street: new FormControl('gachibowli'),
        suite: new FormControl('301'),
        city: new FormControl('Hyderabad'),
        zipcode: new FormControl('500084'),
        geo: new FormGroup({
          lat: new FormControl('1223245.787'),
          lng: new FormControl('-34467.987'),
        })
      }),
      company: new FormGroup({
        name: new FormControl('Gibinzz'),
        catchPhrase: new FormControl('Get the best always'),
        bs: new FormControl('Great colleagues here'),
      }),

    })
  }
  onSubmit(){

  }
}
