import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProvinceComponent } from './province/province.component';
import { CityComponent } from './city/city.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ProvinceComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
