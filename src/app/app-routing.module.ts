import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', loadChildren: './home/home.module#HomePageModule' },

  /*  Menu 1  */
  { path: '', loadChildren: './pages/menu1/menu1/menu1.module#Menu1PageModule' },

  //  { path: 'tabmenu', loadChildren: './pages/menu1/tabX/tabmenu/tabmenu.module#TabmenuPageModule' },
  { path: 'tabtest', loadChildren: './pages/menu1/tabX/tabtest/tabtest.module#TabtestPageModule' },
  { path: 'tabvide', loadChildren: './pages/menu1/tabX/tabvide/tabvide.module#TabvidePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
