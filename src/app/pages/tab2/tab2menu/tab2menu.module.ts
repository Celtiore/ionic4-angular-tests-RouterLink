import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab2menuPage } from './tab2menu.page';
import { Tab2testPage } from '../tab2test/tab2test.page';
import { Tab2emptyPage } from '../tab2empty/tab2empty.page';
import { Tab2testPageModule } from '../tab2test/tab2test.module';
import { Tab2emptyPageModule } from '../tab2empty/tab2empty.module';

const routes: Routes = [
  {
    path: 'tab2menu', component: Tab2menuPage,
    children: [
      { path: '', redirectTo: '/tab2menu/(test2:test)', pathMatch: 'full' },

      { path: 'tab2menu/test', redirectTo: '/tab2menu/(test2:test)', pathMatch: 'full' },
      { path: 'tab2menu/empty', redirectTo: '/tab2menu/(empty2:empty)', pathMatch: 'full' },

      { path: 'test', outlet: 'test2', component: Tab2testPage },
      { path: 'empty', outlet: 'empty2', component: Tab2emptyPage }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab2testPageModule,
    Tab2emptyPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab2menuPage]
})
export class Tab2menuPageModule { }
