import { Component } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent {


  downloadPDF(){
    let link = document.createElement("a");
    link.download = "jeena.pdf";
    link.href = "assets/ylf Logo.pdf";
    link.click();
  }
}
