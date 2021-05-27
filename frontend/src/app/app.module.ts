import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

// Cambiar el locale de idioma la app para que queden los formatos como de los pipes en español de Chile
import localeEsCL from '@angular/common/locales/es-CL';
import { registerLocaleData } from '@angular/common';
registerLocaleData( localeEsCL );

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CL' }, // setear al idioma
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
