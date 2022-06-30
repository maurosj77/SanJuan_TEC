import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'probando';
  jason: any = {
    title: 'cessna',
    carBody: 'prueba2',
    location: '142.254.325.65',
    img: "https://www.freecodecamp.org/espanol/news/content/images/2020/12/react-vs-angular-1-.png"
  }



  ;

  constructor() {}

  ngOnInit(): void {}
}
