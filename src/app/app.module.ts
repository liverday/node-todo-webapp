import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppBootstrapImportsModule } from './app-bootstrap-imports.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './utils/components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapImportsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule, 
    HttpClientModule
  ],
  providers: [
    {
      provide: LOCALE_ID, 
      useValue: 'pt'
    }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
