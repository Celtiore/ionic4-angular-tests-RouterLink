import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabTestPage } from './tab-test.page';
import { AccountsComponent } from '../components/accounts/accounts.component';
import { UsersComponent } from '../components/users/users.component';

const routes: Routes = [
  {
    path: 'tabTest', component: TabTestPage, children: [
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabTestPage, AccountsComponent, UsersComponent]
})
export class TabTestPageModule { }
