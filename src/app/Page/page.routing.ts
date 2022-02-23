import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path : '', children : [  { path : '', loadChildren : ()=> import('./login/login.module').then( referenceModule => referenceModule.LoginModule ) } ]},
  { path : 'dashboard', children : [  { path : '', loadChildren : ()=> import('./dashboard/dahsboard.module').then( referenceModule => referenceModule.DahsboardModule ) } ]},
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
