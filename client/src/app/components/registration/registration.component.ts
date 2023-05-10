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

  downloadPDF(){
    let link = document.createElement("a");
    link.download = "jeena.pdf";
    link.href = "assets/ylf Logo.pdf";
    link.click();
  }
}
