import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyModule } from './body/body.module';
import { HeaderModule } from './header/header.module';
import { NavartComponent } from './header/navart/navart.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BodyModule,
    HeaderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
