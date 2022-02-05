import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from '../welcome/welcome.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path : '', component : DashboardComponent, children : [
    { path : '', component : WelcomeComponent },
    { path : 'weatherforecast', loadChildren : () => import('../wheater-forecast/weather-forecast.module').then( referenceModule => referenceModule.WeatherForecastModule ) },
  ]},
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DahsboardRoutingModule { }
