import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabAdministrationPage } from './tab-administration.page';
import { Tab1AdministrationComponent } from './components/tab1-administration/tab1-administration.component';
import { Tab2AdministrationComponent } from './components/tab2-administration/tab2-administration.component';

const routes: Routes = [{ path: 'tabAdministration', component: TabAdministrationPage }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabAdministrationPage, Tab1AdministrationComponent, Tab2AdministrationComponent]
})
export class TabAdministrationPageModule { }
