import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UpiComponent } from './components/upi/upi.component';
import { PaymentComponent } from './components/payment/payment.component';
import { IppoComponent } from './components/ippo/ippo.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
    path:'upi',
    component:UpiComponent
  },
  {
    path:'payment',
    component:PaymentComponent
  },
  {
    path:'ippo',
    component:IppoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
