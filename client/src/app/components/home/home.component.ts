import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadPDF(){
    let link = document.createElement("a");
    link.download = "Schedule.pdf";
    link.href = "assets/Schedule.pdf";
    link.click();
  }
}
