import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-administration',
  templateUrl: './tab-administration.page.html',
  styleUrls: ['./tab-administration.page.scss'],
})
export class TabAdministrationPage implements OnInit {

  constructor() { }

  ngOnInit() {
    const tabs = document.querySelector('ion-tabs');
    let promise: Promise<any> = null;
    if (tabs) {
      console.log(tabs);
      promise = tabs.componentOnReady();
      promise.then(() => {
        tabs.select(0);
      })
    }

  }

}
