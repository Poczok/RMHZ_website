import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  texto = 'Régi Mesterségek Háza Zenta';
  lat = 45.927564;
  lng = 20.088132;
  zoom = 16;

  constructor() { }

  ngOnInit() {}
}
