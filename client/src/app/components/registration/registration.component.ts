import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  regis={
    name:'',
    dob:'',
    address:'',
    phone_no:'',
    whatzup_no:'',
    email:'',
    district:''
  }

  constructor() { }

  ngOnInit(): void {
  }

  register(){
    console.log(this.regis);
  }

}
