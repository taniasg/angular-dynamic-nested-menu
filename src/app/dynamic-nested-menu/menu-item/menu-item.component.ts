import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-menu-item',
	templateUrl: './menu-item.component.html',
	styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
	@Input() items: any[];
	// @ViewChild('childMenu') public childMenu;
	@ViewChild('childMenu', { static: true }) public childMenu: any;
	@Output() onItemSelected = new EventEmitter<any>();
	@Output() onDeleteItem = new EventEmitter<any>();

	constructor(public router: Router) {
	}

	ngOnInit() {
	}

	/**
	 * @description Funcion para emitir el elemento seleccionado
	 * @param event Evento para detener el comportamiento del menu
	 * @param item Elemento seleccionado
	 */
	itemSelected(item: any, event?: any): void {
		this.onItemSelected.emit(item);
		event && event.stopPropagation();
	}

	deleteItem(item: any, index: number, event?: any): void {
		this.onDeleteItem.emit(
			{
				item, index
			}
		);
		event && event.stopPropagation();
	}
}