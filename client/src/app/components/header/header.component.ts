import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

 ngOnInit():  void {
    
      let link = document.createElement("a");
      link.download = "Schedule.pdf";
     link.href = "assets/Schedule.pdf";
      link.click();
      
  }
  
}
