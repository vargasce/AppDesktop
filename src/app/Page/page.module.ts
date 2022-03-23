import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { PagesRoutingModule } from "./page.routing";
import { ComponentsModule } from "../Components/components.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { WeatherForecastComponent } from './wheater-forecast/wheater-forecast.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgxElectronModule } from 'ngx-electron';
import { LoginComponent } from './login/login.component';
import { CardComponent } from './welcome/Components/card/card.component';
import { TaskComponent } from './task/task.component';

@NgModule({
    declarations : [
        DashboardComponent,
        WeatherForecastComponent,
        WelcomeComponent,
        LoginComponent,
        CardComponent,
        TaskComponent
    ],
    imports : [
        CommonModule,
        FormsModule,
        HttpClientModule,
        PagesRoutingModule,
        ComponentsModule.forRoot(),
        ComponentsModule,
        NgxElectronModule,
        ReactiveFormsModule
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