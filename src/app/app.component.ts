import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'angular-dynamic-nested-menu';

	catalogos = {
		operadores: [
			{
				"label": "Operadores",
				"placeholder": "Selecciona un operador",
				"children": [
					{
						"tipo_operador": "ARITMETICOS",
						"label": "Aritméticos",
						"children": [
							{
								"id": 6,
								"tipo_operador": "ARITMETICOS",
								"label": "+",
								"tipo_elemento": "OPERADOR"
							},
							{
								"id": 7,
								"tipo_operador": "ARITMETICOS",
								"label": "-",
								"tipo_elemento": "OPERADOR"
							},
							{
								"id": 8,
								"tipo_operador": "ARITMETICOS",
								"label": "*",
								"tipo_elemento": "OPERADOR"
							},
							{
								"id": 9,
								"tipo_operador": "ARITMETICOS",
								"label": "/",
								"tipo_elemento": "OPERADOR"
							}
						]
					},
					{
						"tipo_operador": "COMPARATIVOS",
						"label": "Comparativos",
						"children": [
							{
								"id": 12,
								"tipo_operador": "COMPARATIVOS",
								"label": "=",
								"tipo_elemento": "OPERADOR"
							},
							{
								"id": 13,
								"tipo_operador": "COMPARATIVOS",
								"label": "!=",
								"tipo_elemento": "OPERADOR"
							},
							{
								"id": 14,
								"tipo_operador": "COMPARATIVOS",
								"label": "<",
								"tipo_elemento": "OPERADOR"
							},
							{
								"id": 15,
								"tipo_operador": "COMPARATIVOS",
								"label": ">",
								"tipo_elemento": "OPERADOR"
							},
							{
								"id": 16,
								"tipo_operador": "COMPARATIVOS",
								"label": "<=",
								"tipo_elemento": "OPERADOR"
							},
							{
								"id": 17,
								"tipo_operador": "COMPARATIVOS",
								"label": ">=",
								"tipo_elemento": "OPERADOR"
							},
							{
								"id": 18,
								"tipo_operador": "COMPARATIVOS",
								"label": "EN",
								"tipo_elemento": "OPERADOR"
							},
							{
								"id": 19,
								"tipo_operador": "COMPARATIVOS",
								"label": "NO EN",
								"tipo_elemento": "OPERADOR"
							},
							{
								"id": 20,
								"tipo_operador": "COMPARATIVOS",
								"label": "ES NINGUNO",
								"tipo_elemento": "OPERADOR"
							}
						]
					},
					{
						"tipo_operador": "LOGICOS",
						"label": "Lógicos",
						"children": [
							{
								"id": 10,
								"tipo_operador": "LOGICOS",
								"label": "Y",
								"tipo_elemento": "OPERADOR"
							},
							{
								"id": 11,
								"tipo_operador": "LOGICOS",
								"label": "O",
								"tipo_elemento": "OPERADOR"
							}
						]
					},
					{
						"tipo_operador": "PUNTUACION",
						"label": "Puntuación",
						"children": [
							{
								"id": 4,
								"tipo_operador": "PUNTUACION",
								"label": "(",
								"tipo_elemento": "OPERADOR"
							},
							{
								"id": 5,
								"tipo_operador": "PUNTUACION",
								"label": ")",
								"tipo_elemento": "OPERADOR"
							}
						]
					}
				]
			}
		],
		campos: [
			{
				"label": "Campos",
				"placeholder": "Selecciona un campo",
				"children": [
					{
						"label": "RR4(P)ClaveCiaAAAAMMDD.txt",
						"children": [
							{
								"id_archivo": 123,
								"id_layout": 10,
								"id_campo": 54,
								"label": "Prueba2 dato homologado",
								"tipo_dato": "Numérico",
								"posicion": "1",
								"tipo_elemento": "CAMPO"
							}
						]
					}
				]
			}
		]
	}

	itemSelected(item): void {
		console.log(item)
	}
}
