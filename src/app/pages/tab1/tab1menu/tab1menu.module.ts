import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab1menuPage } from './tab1menu.page';
import { Tab1testPage } from '../tab1test/tab1test.page';
import { Tab1emptyPage } from '../tab1empty/tab1empty.page';
import { Tab1testPageModule } from '../tab1test/tab1test.module';
import { Tab1emptyPageModule } from '../tab1empty/tab1empty.module';

const routes: Routes = [
  {
    path: 'tab1menu', component: Tab1menuPage,
    children: [
      { path: '', redirectTo: '/tab1menu/(test:test)', pathMatch: 'full' },

      { path: 'tab1menu/test', redirectTo: '/tab1menu/(test:test)', pathMatch: 'full' },
      { path: 'tab1menu/empty', redirectTo: '/tab1menu/(empty:empty)', pathMatch: 'full' },

      { path: 'test', outlet: 'test', component: Tab1testPage },
      { path: 'empty', outlet: 'empty', component: Tab1emptyPage }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab1testPageModule,
    Tab1emptyPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab1menuPage]
})
export class Tab1menuPageModule { }
