import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'single', loadChildren: './pages/single/single.module#SinglePageModule' },

  /*  Tab 1 */
  { path: '', loadChildren: './pages/tab1/tab1menu/tab1menu.module#Tab1menuPageModule' },
  /*  Tab 2 */
  { path: '', loadChildren: './pages/tab2/tab2menu/tab2menu.module#Tab2menuPageModule' },
  /*  Tab3  */
  { path: '', loadChildren: './pages/tab3/tab3menu/tab3menu.module#Tab3menuPageModule' },
  /*  Menu 1  */
  { path: '', loadChildren: './pages/menu1/menu1/menu1.module#Menu1PageModule' },

  { path: 'menu1/tab3menu', loadChildren: './pages/menu1/menu1/menu1.module#Menu1PageModule' },
  /*  Menu 2  */
  { path: '', loadChildren: './pages/menu2/menu2/menu2.module#Menu2PageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
