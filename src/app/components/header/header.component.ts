import {Component} from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})

export class HeaderComponent {
  logoPath: string;

  constructor(){
    this.logoPath = '../dist/logo.png';
  }
}