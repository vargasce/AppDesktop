import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { WeatherForecastComponent } from './wheater-forecast.component';

const routes: Routes = [
  { path : '', component : WeatherForecastComponent },
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherForecastRoutingModule { }

