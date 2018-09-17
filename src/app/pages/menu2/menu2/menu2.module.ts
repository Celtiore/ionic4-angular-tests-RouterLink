import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { Menu2Page } from './menu2.page';
import { Menu2pagePage } from '../menu2page/menu2page.page';
import { Menu2pagePageModule } from '../menu2page/menu2page.module';
import { Menu2testPage } from '../menu2test/menu2test.page';
import { Menu2testPageModule } from '../menu2test/menu2test.module';


const routes: Routes = [
  {
    path: 'menu2', component: Menu2Page,
    children: [
      { path: '', redirectTo: '/menu2/(split2:menu2page)', pathMatch: 'full' },
      
      { path: 'menu2/menu2page', redirectTo: '/menu2/(split2:menu2page)', pathMatch: 'full' },
      { path: 'menu2/menu2test', redirectTo: '/menu2/(split2:menu2test)', pathMatch: 'full' },
      
      { path: 'menu2page', outlet: 'split2', component: Menu2pagePage },
      { path: 'menu2test', outlet: 'split2', component: Menu2testPage }
    ]
  }


];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Menu2pagePageModule,
    Menu2testPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Menu2Page]
})
export class Menu2PageModule { }
