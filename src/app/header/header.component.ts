import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedItem = window.location.pathname;
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'hu', 'sr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/hu|sr/) ? browserLang : 'en');
  }

  ngOnInit() {
    this.setLanguage();
  }
  setLanguage() {
    this.translate.use(navigator.language.substring(0, 2));
  }
  listClick(path: any) {
    this.selectedItem = path;
}
}
