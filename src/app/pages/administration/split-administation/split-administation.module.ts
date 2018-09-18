import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SplitAdministationPage } from './split-administation.page';
import { Admin1Page } from '../admin1/admin1.page';
import { Admin2Page } from '../admin2/admin2.page';
import { TabAdministrationPage } from '../tab-administration/tab-administration.page';
import { Admin1PageModule } from '../admin1/admin1.module';
import { Admin2PageModule } from '../admin2/admin2.module';
import { TabAdministrationPageModule } from '../tab-administration/tab-administration.module';

const routes: Routes = [
  {
    path: 'splitAdministation',
    component: SplitAdministationPage,
    children: [
      { path: '', redirectTo: '/splitAdministation/(administration:tabAdministration)', pathMatch: 'full' },

      { path: 'splitAdministation/admin1', redirectTo: '/splitAdministation/(administration:admin1)', pathMatch: 'full' },
      { path: 'admin1', outlet: 'administration', component: Admin1Page },

      { path: 'splitAdministation/admin2', redirectTo: '/splitAdministation/(administration:admin2)', pathMatch: 'full' },
      { path: 'admin2', outlet: 'administration', component: Admin2Page},

      { path: 'splitAdministation/tabAdministration', redirectTo: '/splitAdministation/(administration:tabAdministration)', pathMatch: 'full' },
      { path: 'tabAdministration', outlet: 'administration', component: TabAdministrationPage }

    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Admin1PageModule,
    Admin2PageModule,
    TabAdministrationPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SplitAdministationPage]
})
export class SplitAdministationPageModule { }
