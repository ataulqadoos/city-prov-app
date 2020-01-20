import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProvinceComponent } from './province/province.component';
import { CityComponent } from './city/city.component';

@NgModule({
  declarations: [
    AppComponent,
    ProvinceComponent,
    CityComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
