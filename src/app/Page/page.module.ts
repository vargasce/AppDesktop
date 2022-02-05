import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { PagesRoutingModule } from "./page.routing";
import { ComponentsModule } from "../Components/components.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { WeatherForecastComponent } from './wheater-forecast/wheater-forecast.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgxElectronModule } from 'ngx-electron';

@NgModule({
    declarations : [
        DashboardComponent,
        WeatherForecastComponent,
        WelcomeComponent
    ],
    imports : [
        CommonModule,
        FormsModule,
        HttpClientModule,
        PagesRoutingModule,
        ComponentsModule.forRoot(),
        ComponentsModule,
        NgxElectronModule
    ],
    schemas : [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})

export class PageModule{
    static forRoot(): ModuleWithProviders<any> {
        return{
            ngModule : PageModule
        }
    }
}