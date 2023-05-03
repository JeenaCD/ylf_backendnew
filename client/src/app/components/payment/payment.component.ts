import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

 buttonType = "pay";
 paymentRequest!: google.payments.api.PaymentDataRequest;
  constructor() { }

  ngOnInit(): void {

   
    // this.paymentRequest = {
    //   apiVersion:2,
    //   apiVersionMinor:0,
    //   allowedPaymentMethods:[
    //     {
    //       type:'CARD',
    //       parameters:{
    //         allowedAuthMethods:['PAN_ONLY','CRYPTOGRAM_3DS'],
    //         allowedCardNetworks:['MASTERCARD','VISA'],
    //       },
    //       tokenizationSpecification:{
    //         type:'PAYMENT_GATEWAY',
    //         parameters:{
    //           gateway:'example',
    //           gatewayMerchantId:'exampleGatewayMerchantId',
    //         }
    //       }
    //     }
    //   ],
    //   merchantInfo:{
    //     merchantId:'17613812255336763067',
    //     merchantName:'Demo only',
    //   },
    //   transactionInfo:{
    //     totalPriceStatus:'FINAL',
    //     totalPriceLabel:'Total',
    //     totalPrice:'',
    //     currencyCode:'USD',
    //     countryCode:'US',
    //   }
    // }
    this.paymentRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
        {
          type: "CARD",
          parameters: {
            allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
            allowedCardNetworks: ["AMEX", "VISA", "MASTERCARD"]
          },
          tokenizationSpecification: {
            type: "PAYMENT_GATEWAY",
            parameters: {
              gateway: "example",
              gatewayMerchantId: "exampleGatewayMerchantId"
            }
          }
        }
      ],
      merchantInfo: {
        merchantId: "12345678901234567890",
        merchantName: "Demo Merchant"
      },
      transactionInfo: {
        totalPriceStatus: "FINAL",
        totalPriceLabel: "Total",
        totalPrice: "100.00",
        currencyCode: "USD",
        countryCode: "US"
      }
    };
  }

  
async onLoadPaymentData(event:Event){
 const paymentData = (event as CustomEvent<google.payments.api.PaymentData>)
  .detail;

}
}
