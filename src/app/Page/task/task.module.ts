import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { TaskRoutingModule } from "./task.routing";
import { NgxElectronModule } from 'ngx-electron';

@NgModule({
    declarations : [
    ],
    imports : [
        CommonModule,
        FormsModule,
        HttpClientModule,
        TaskRoutingModule,
        NgxElectronModule
    ],
    schemas : [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})

export class TaskModule{
    static forChild(): ModuleWithProviders<any> {
        return{
            ngModule : TaskModule
        }
    }
}