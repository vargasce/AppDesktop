import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { WeatherForecastRoutingModule } from "./weather-forecast.routing";
import { NgxElectronModule } from 'ngx-electron';

@NgModule({
    declarations : [
    ],
    imports : [
        CommonModule,
        FormsModule,
        HttpClientModule,
        WeatherForecastRoutingModule,
        NgxElectronModule
    ],
    schemas : [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})

export class WeatherForecastModule{
    static forChild(): ModuleWithProviders<any> {
        return{
            ngModule : WeatherForecastModule
        }
    }
}