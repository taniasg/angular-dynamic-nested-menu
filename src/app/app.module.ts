import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicNestedMenuModule } from './dynamic-nested-menu/dynamic-nested-menu.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DynamicNestedMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
