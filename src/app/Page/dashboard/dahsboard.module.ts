import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { DahsboardRoutingModule } from "./dahsboard.routing";


@NgModule({
    declarations : [
    ],
    imports : [
        CommonModule,
        FormsModule,
        HttpClientModule,
        DahsboardRoutingModule
    ],
    schemas : [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})

export class DahsboardModule{
    static forChild(): ModuleWithProviders<any> {
        return{
            ngModule : DahsboardModule
        }
    }
}