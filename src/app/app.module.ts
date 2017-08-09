import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {AppComponent } from './app.component';
import {ProductsComponent } from './products.component';
import {ProductdataService } from './productdata.service';




@NgModule({
  declarations: [
    AppComponent,ProductsComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [ProductdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
