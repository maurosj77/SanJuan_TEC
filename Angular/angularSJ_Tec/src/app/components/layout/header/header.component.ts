import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'en la casa de una abuela';
  cardInfo: any = {
    title: 'kakita',
    imaGen:
      'https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/f09f8452-ca18-44b5-a3eb-495c93401121.png?auto=format&q=50&w=90&h=90&fit=max&dpr=3',
    carBody: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
