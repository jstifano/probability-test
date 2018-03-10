import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component'; // Component principal de la aplicacion
import { LaddaModule } from 'angular2-ladda'; // Modulo de Ladda


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LaddaModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
