import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicNestedMenuComponent } from './dynamic-nested-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
	declarations: [DynamicNestedMenuComponent, MenuItemComponent],
	imports: [
		CommonModule,
		MatMenuModule,
		MatFormFieldModule,
		MatSelectModule,
		MatTooltipModule
	],
	exports: [DynamicNestedMenuComponent, MenuItemComponent]
})
export class DynamicNestedMenuModule { }
