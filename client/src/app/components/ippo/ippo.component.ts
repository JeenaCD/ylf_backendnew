import { Component,OnInit } from '@angular/core';
import { PaymentService } from 'src/app/service/payment.service';
import "@angular/compiler";
declare var Ippopay: any;

@Component({
  selector: 'app-ippo',
  templateUrl: './ippo.component.html',
  styleUrls: ['./ippo.component.css']
})


export class IppoComponent implements OnInit {
  Order_id:any;
  constructor(private payment:PaymentService) {
    console.log('Called Constructor');
    Ippopay.init();
  }
  ngOnInit() {
    console.log('Called ngOnInit method');

    const ippopayHandler = ( function (e:any) {
      if(e.data.status == 'success'){
            console.log(e.data)
        }
        if(e.data.status == 'failure'){
            console.log(e.data)
        }
    });
    window.addEventListener('message', ippopayHandler);
    this.payment.ippopayment().subscribe((res:any)=>{
      console.log(res.data.order.order_id);
      this.Order_id = res.data.order.order_id;
      Ippopay.open(this.Order_id,'pk_test_h8d0Gf1xVZFX');
    })
  }  


  pay(){
    this.payment.ippopayment().subscribe((res:any)=>{
      console.log(res);
    })
  }



}
