import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//COMPONENTS
import { MenuHomeComponent } from './menu-home/menu-home.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
	declarations : [
        MenuHomeComponent,
        FooterComponent
	],
	imports : [
		CommonModule,
		RouterModule
	],
	exports : [
        MenuHomeComponent,
		FooterComponent
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
