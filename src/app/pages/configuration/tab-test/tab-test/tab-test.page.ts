import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-test',
  templateUrl: './tab-test.page.html',
  styleUrls: ['./tab-test.page.scss'],
})
export class TabTestPage implements OnInit {
  myIndex: boolean = false;

  constructor() {}

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
