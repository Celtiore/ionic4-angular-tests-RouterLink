import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: '', loadChildren: './pages/configuration/split-configuration/split-configuration.module#SplitConfigurationPageModule' },
  { path: '', loadChildren: './pages/administration/split-administation/split-administation.module#SplitAdministationPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
