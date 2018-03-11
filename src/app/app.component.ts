/*************************************************************************
* @author :: Javier Stifano <jstifano18@gmail.com>                       *
* @Component :: Componente creado para el manejo del ejercicio planteado *
**************************************************************************/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private title : string; // Nombre del titulo
  private showLadda: boolean; // Variable para mostrar u ocultar el spinner
  private proportion: string; // Fraccion de la proporcion que se va apostar
  private result: string;
  private enableButton: boolean; // Deshabilitar el boton si el campo es invalido

  // Constructor del componente
  constructor(){
  	this.title = "¡Posibilidad de ser millonario!";
  	this.showLadda = false;
  	this.result = undefined;
  	this.enableButton = false;
  }

  // Metodo para obtener el título de la vista
  getTitle = () => {
  	return this.title;
  }

  // Metodo para setear el valor del spinner
  setShowSpinner = (value : boolean) => {
  	this.showLadda = value;
  }

  // Metodo para obtener el valor del showLadda
  getShowSpinner = () => {
  	return this.showLadda;
  }

  // Metodo para setear la proporcion introducida por el usuario 
  setProportion = (proportion: string) => {
  	if ( proportion.indexOf('/') === -1 || 
  		isNaN(parseInt(proportion.split('/')[0])) || 
  		isNaN(parseInt(proportion.split('/')[1])) || 
  		proportion.split('/')[0] > proportion.split('/')[1] ||
  		proportion.split('/')[0] === "" || 
  		proportion.split('/')[1] === ""
  	){
  		console.log("ENTRO EN EL IF");
  		this.setEnable(false);
  	}
  	else{
  		console.log("ENTRO EN EL ELSE");
  		this.setEnable(true);	
  	}

  	this.proportion = proportion;
  }

  // Metodo para obtener la proporcion introducida por el usuario
  getProportion = () => {
  	return this.proportion;
  }

  // Metodo para setear la posibilidad de ser millonario
  setResult = (result: string) => {
  	this.result = result;
  }

  // Metodo para obtener el resultado de la posibilidad de ser millonario
  getResult = () => {
  	return this.result;
  }

  setEnable = (value: boolean) => {
  	this.enableButton = value;
  }

  getEnable = () => {
  	return this.enableButton;
  }

  // Metodo que realiza el calculo de probabilidad si puedo ser millonario
  calculateProbability = (proportion: string) => {
  	this.setShowSpinner(true);
	let initial_proportion = parseInt(proportion.split('/')[0]) / parseInt(proportion.split('/')[1]);
	let cont = initial_proportion;
	let capital = 1;
	let wins = 0; // Veces que la moneda salio cara - quiere decir que ganó

	// Simulo los 1000 lanzamientos
	for (let i = 0 ; i < 1000; i++) {
		// La moneda lanzada cayo en cara
		if( Math.round(Math.random()) === 0 ){
			wins += 1;
			capital = capital + (cont*2); // Si es cara, lo apostado * 2
		}
		else {
			capital = capital - cont; // Resto lo apostado
		}

		// Chequeo si tengo capital de donde apostar
		if(capital <= 0) break;
		
		cont = initial_proportion * capital;
	}
	this.setResult((wins/1000).toFixed(12).toString()); // Seteo el resultado formateado a 12 digitos

	// Muestro la posibilidad por 4000 segundos y lo oculto luego
	setTimeout(() => {
		this.setProportion(""); // Limpio el campo de calcular
		this.setShowSpinner(false); // Quito el spinner
		this.setResult(undefined); // Quito el resultado de la pantalla
	}, 4000);
  }

}
