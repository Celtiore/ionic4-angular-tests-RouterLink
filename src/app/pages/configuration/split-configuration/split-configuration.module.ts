import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SplitConfigurationPage } from './split-configuration.page';
import { Page1Page } from '../page1/page1.page';
import { Page1PageModule } from '../page1/page1.module';
import { Page2Page } from '../page2/page2.page';
import { Page2PageModule } from '../page2/page2.module';
import { TabTestPage } from '../tab-test/tab-test/tab-test.page';
import { TabTestPageModule } from '../tab-test/tab-test/tab-test.module';

const routes: Routes = [
  {
    path: 'splitConfiguration',
    component: SplitConfigurationPage,
    children: [
      { path: '', redirectTo: '/splitConfiguration/(configuration:tabTest)' , pathMatch: 'full' },

      { path: 'splitConfiguration/page1', redirectTo: '/splitConfiguration/(configuration:page1)', pathMatch: 'full' },
      { path: 'page1', outlet: 'configuration', component: Page1Page },

      { path: 'splitConfiguration/page2', redirectTo: '/splitConfiguration/(configuration:page2)', pathMatch: 'full' },
      { path: 'page2', outlet: 'configuration', component: Page2Page },

      { path: 'splitConfiguration/tabTest', redirectTo: '/splitConfiguration/(configuration:tabTest)', pathMatch: 'full' },
      { path: 'tabTest', outlet: 'configuration', component: TabTestPage }

    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page1PageModule,
    Page2PageModule,
    TabTestPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SplitConfigurationPage]
})
export class SplitConfigurationPageModule { }
