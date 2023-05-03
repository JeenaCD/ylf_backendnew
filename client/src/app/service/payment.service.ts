import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }

  ippopayment(){
    return this.http.get<any>("http://localhost:8000/ippopayment")
  }
}
