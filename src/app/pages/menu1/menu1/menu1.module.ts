import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Menu1Page } from './menu1.page';
import { Menu1pagePage } from '../menu1page/menu1page.page';
import { Menu1pagePageModule } from '../menu1page/menu1page.module';
import { Menu1testPage } from '../menu1test/menu1test.page';
import { Menu1testPageModule } from '../menu1test/menu1test.module';
import { Tab3menuPage } from '../../tab3/tab3menu/tab3menu.page';
import { Tab3menuPageModule } from '../../tab3/tab3menu/tab3menu.module';

const routes: Routes = [
  {
    path: 'menu1',
    component: Menu1Page,

    children: [
      { path: '', redirectTo: '/menu1/(split1:menu1page)', pathMatch: 'full' },

      { path: 'menu1/menu1page', redirectTo: '/menu1/(split1:menu1page)', pathMatch: 'full' },
      { path: 'menu1page', outlet: 'split1', component: Menu1pagePage },

      { path: 'menu1/menu1test', redirectTo: '/menu1/(split1:menu1test)', pathMatch: 'full' },
      { path: 'menu1test', outlet: 'split1', component: Menu1testPage },

      { path: 'menu1/tab3menu', redirectTo: '/menu1/(split1:tab3menu)', pathMatch: 'full' },
      { path: 'tab3menu', outlet: 'split1', component: Tab3menuPage }

    ]
  }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Menu1pagePageModule,
    Menu1testPageModule,
    Tab3menuPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Menu1Page]
})
export class Menu1PageModule { }
