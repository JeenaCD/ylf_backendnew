import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UpiComponent } from './components/upi/upi.component';
import { PaymentComponent } from './components/payment/payment.component';
import { IppoComponent } from './components/ippo/ippo.component';
import { HeaderComponent } from './components/header/header.component';
import { SpeakersComponent } from './components/speakers/speakers.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
 
  // {
  //   path:'speakers',
  //   component:SpeakersComponent
  // },
  {
    path:'scheduledownload',
    component:HeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
