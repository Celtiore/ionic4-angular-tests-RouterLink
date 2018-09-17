import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab3menuPage } from './tab3menu.page';
import { Tab3pagePage } from '../tab3page/tab3page.page';
import { Tab3emptyPage } from '../tab3empty/tab3empty.page';
import { Tab3pagePageModule } from '../tab3page/tab3page.module';
import { Tab3emptyPageModule } from '../tab3empty/tab3empty.module';

const routes: Routes = [
  {
    path: 'tab3menu', component: Tab3menuPage,
    children: [
      { path: '', redirectTo: '/tab3menu/(page3:page3)', pathMatch: 'full' },

      { path: 'tab3menu/page3', redirectTo: '/tab3menu/(page3:page3)', pathMatch: 'full' },
      { path: 'tab3menu/empty3', redirectTo: '/tab3menu/(empty3:empty3)', pathMatch: 'full' },

      { path: 'page3', outlet: 'page3', component: Tab3pagePage },
      { path: 'empty3', outlet: 'empty3', component: Tab3emptyPage }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab3pagePageModule,
    Tab3emptyPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab3menuPage]
})
export class Tab3menuPageModule { }
