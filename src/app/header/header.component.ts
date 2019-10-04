import { Component, OnInit, Renderer2 } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedItem = window.location.pathname;
  constructor(public translate: TranslateService, private renderer: Renderer2,) {
    translate.addLangs(['en', 'hu', 'sr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en'); }

  ngOnInit() {
    this.setLanguage();
  }
  setLanguage() {
    this.translate.use(navigator.language.substring(0, 2));
  }
  listClick(path) {
    this.selectedItem = path;
}
}
