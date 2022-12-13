import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersModule } from './characters/characters.module';
import { ElementsModule } from './elements/elements.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CharactersModule,
    ElementsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
