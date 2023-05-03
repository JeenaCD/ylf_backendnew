import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-upi',
  templateUrl: './upi.component.html',
  styleUrls: ['./upi.component.css']
})
export class UpiComponent implements OnInit {

  public myAngularxQrCode: string ;

  payment={
    pn:'',
    pa:'',
    am:''
  }
  constructor() {this.myAngularxQrCode = 'upi://pay?pn=pn&pa=pa&cu=INR&am=am'; }

  ngOnInit(): void {
  }

}
