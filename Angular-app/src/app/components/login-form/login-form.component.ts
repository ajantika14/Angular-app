import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators,FormArray} from '@angular/forms'
import { CustomValidations } from 'src/app/classes/custom.validations';
import { IUsers } from '../user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  userForm: FormGroup;
  get name(){
    return this.userForm.get('name');
  }

get username(){
  return this.userForm.get('username');
}

  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('Ajantika Banerjee', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]),
      username: new FormControl('ajantika', CustomValidations.unique),
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
      hobbies: new FormArray([])

    });
  }

  addHobby(){
    (<FormArray>this.userForm.get('hobbies')).push(new FormControl(''));

  }

  get userFormHobbies () {
    return this.userForm.get('hobbies') as FormArray;
  }
  onSubmit(){
    if(!this.userForm.valid){
      return;
    }
  console.log(this.userForm.value)
  }

  deleteHobby(index:any){
 (<FormArray>this.userForm.get('hobbies')).removeAt(index);
  }

  reset(){
    this.userForm.reset();
  }
}
