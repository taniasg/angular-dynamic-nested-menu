import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-dynamic-nested-menu',
	templateUrl: './dynamic-nested-menu.component.html',
	styleUrls: ['./dynamic-nested-menu.component.scss']
})
export class DynamicNestedMenuComponent implements OnInit {
	@Input() set items(items: any[]) {
		this._items = items;
	}

	@Output() onItemSelected = new EventEmitter<any>();
	@Output() onAddItem = new EventEmitter<boolean>();
	@Output() onDeleteItem = new EventEmitter<any>();

	_items: any[] = [];

	constructor() { }

	ngOnInit(): void {
	}

	/**
	 * @description Funcion para emitir el elemento seleccionado
	 * @param item Elemento seleccionado
	 */
	itemSelected(item: any): void {
		this.onItemSelected.emit(item);
	}

	/**
	 * @description Funcion para emitir que se desea agregar un nuevo elemento
	 */
	addItem(): void {
		this.onAddItem.emit(true);
	}

	/**
	 * @description Funcion para emitir que se desea eliminar un elemento
	 */
	deleteItem(item: any): void {
		this.onDeleteItem.emit(item);
	}

}
