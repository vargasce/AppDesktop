import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//COMPONENTS
import { MenuHomeComponent } from './menu-home/menu-home.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonSubmitComponent } from './button-submit/button-submit.component';
import { InputComponent } from './input/input.component';
import { TitleComponent } from './title/title.component';



@NgModule({
	declarations : [
        MenuHomeComponent,
        FooterComponent,
        ButtonSubmitComponent,
        InputComponent,
        TitleComponent
	],
	imports : [
		CommonModule,
		RouterModule
	],
	exports : [
        MenuHomeComponent,
		FooterComponent,
		ButtonSubmitComponent,
		InputComponent,
		TitleComponent
	],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class ComponentsModule {
	static forRoot() : ModuleWithProviders<any>{
		return{
			ngModule : ComponentsModule
		}
	}
}
