import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: '', loadChildren: './pages/configuration/split-configuration/split-configuration.module#SplitConfigurationPageModule' },
  //{ path: 'page1', loadChildren: './pages/administration/page1/page1.module#Page1PageModule' },
  //{ path: 'page2', loadChildren: './pages/administration/page2/page2.module#Page2PageModule' },
  { path: '', loadChildren: './pages/administration/split-administation/split-administation.module#SplitAdministationPageModule' },
  //{ path: 'admin2', loadChildren: './pages/administration/admin2/admin2.module#Admin2PageModule' },
  //{ path: 'admin1', loadChildren: './pages/administration/admin1/admin1.module#Admin1PageModule' },
  //{ path: '', loadChildren: './pages/administration/tab-administration/tab-administration.module#TabAdministrationPageModule' },
  //  { path: 'tabTest', loadChildren: './pages/configuration/tab-test/tab-test.module#TabTestPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
