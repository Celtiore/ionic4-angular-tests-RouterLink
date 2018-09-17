import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabmenuPage } from './tabmenu.page';
import { TabvidePage } from '../tabvide/tabvide.page';
import { TabtestPage } from '../tabtest/tabtest.page';
import { TabvidePageModule } from '../tabvide/tabvide.module';
import { TabtestPageModule } from '../tabtest/tabtest.module';

const routes: Routes = [
  {
    path: '',
    component: TabmenuPage,
    outlet: 'toto',

    children: [
      { path: '', redirectTo: '/tabvide', pathMatch: 'full' },
      { path: 'tabvide',  component: TabvidePage, },
      { path: 'tabtest',  component: TabtestPage, }
    ]
  },
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabvidePageModule,
    TabtestPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabmenuPage]
})
export class TabmenuPageModule { }
