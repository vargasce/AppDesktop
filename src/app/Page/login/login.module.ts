import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LoginRoutingModule } from './login.routing';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    LoginRoutingModule
  ],
  schemas : [
      CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class LoginModule {
    static forChild(): ModuleWithProviders<any> {
        return {
            ngModule: LoginModule
        }
    }
}
